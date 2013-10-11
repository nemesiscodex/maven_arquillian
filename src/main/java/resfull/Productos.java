/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package resfull;

import com.google.gson.Gson;
import ejb.ManagerI;
import ejb.ProductoManager;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import jpa.Producto;

/**
 *
 * @author Alexander
 */
@Stateless
@Path("/productos")
public class Productos {
    static List<Producto> productos;
   
    @EJB
    ProductoManager P;
    
    @GET
    public Response listarProductos() {
        productos = P.Listar("Producto");
        if (this.productos.isEmpty()) {
            return Response
		   .status(200)
		   .entity("[]").build();
        } else {
            Gson objetogson = new Gson();
            System.out.println(objetogson.toJson(productos));
            return Response
		   .status(200)
		   .entity(objetogson.toJson(productos)).build();
        }
    }
    
    @GET
    @Path("{p_id}")
    public String mostrarCliente(@PathParam("p_id") int id) {
        productos = (ArrayList<Producto>) P.Listar("Producto");
        if (this.productos.isEmpty()) {
            return "[]";
        } else {
            for (Producto p : this.productos) {
                if (p.getId() == id) {
                    Gson gson = new Gson();
                    return gson.toJson(p);
                }
            }
            Gson gson = new Gson();
            return gson.toJson("No existe el producto solicitado");
        }
    }
    
    /**
     *
     * @param costo
     * @param nombre
     * @param descripcion
     */
    @POST
    public void crearProducto(
            @FormParam("costo") int costo,
            @FormParam("nombre") String nombre,
            @FormParam("descripcion") String descripcion,
            @FormParam("stock") int stock, String body) 
    {   
        System.out.println("Guardado."+costo+"="+stock);
        System.out.println("{}");
        Producto p = new Producto(null, costo, nombre, descripcion);
        p.setStock(stock);
        P.Guardar(p);
    }
    
    /**
     *
     * @param id
     */
    @DELETE
    @Path("{id}")
    public void eliminarProducto(@PathParam("id") int id, String body) {
        P.Borrar(id, Producto.class);
    }
    
    @PUT
    @Path("{p_id}")
    public void modificarProducto(
            @PathParam("p_id") int id, String json) 
    {
        Gson gson = new Gson();
        Producto pro = gson.fromJson(json, Producto.class);
        pro.setId(id);
        P.Actualizar(pro);
    }
    
}

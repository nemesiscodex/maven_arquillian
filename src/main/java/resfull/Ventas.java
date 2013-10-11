/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package resfull;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import ejb.ClienteManager;
import ejb.DetalleManager;
import ejb.ProductoManager;
import ejb.VentaManager;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import jpa.Cliente;
import jpa.Detalle;
import jpa.Producto;
import jpa.Venta;


@Path("/ventas")
public class Ventas {
    @EJB
    VentaManager vm;
    
    @EJB
    ClienteManager cm;
    
    @EJB
    ProductoManager pm;
    
    @EJB
    DetalleManager dm;
    public boolean verificarVentas(int id) {
        
        if (ventas.isEmpty()) {
            return false;
        } else {
            for (Venta v : ventas) {
                if (v.getId() == id) {
                    Gson gson = new Gson();
                    return true;
                }
            }
            Gson gson = new Gson();
            return false;
        }
    }

    public double montos(int id) {
        List<Venta> ventas = null;
        for (Venta v : ventas) {
            if (v.getId() == id) {
                return v.getTotal();
            }
        }
        return 0;

    }
    List<Venta> ventas;
    static int secuencia = 1;

    @GET
    public Response getVentas() {
        List<Venta> ventas = vm.Listar("Venta");
        //List<Venta> ventas = new ArrayList<Venta>();
        for(Venta v : ventas){
            v.idCli = v.getIdCliente().getId();
            v.cliCI = v.getIdCliente().getCi();
            v.cliNombre = v.getIdCliente().getNombre();
            for(Detalle d : v.getDetalle()){
                d.prodCod = d.getiProductos().getId();
                d.prodNom = d.getiProductos().getNombre();
            }
            v.productos = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create().toJson(v.getDetalle(),List.class);
            System.out.println(v.getDetalle().size());
        }
        
        if (ventas.isEmpty()) {
            return Response
                    .status(200)
                    .entity("[]").build();
        } else {
            Gson objetogson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
            return Response
                    .status(200)
                    .entity(objetogson.toJson(ventas)).build();
        }
    }

    @GET
    @Path("{p_id}")
    public Response getVentas(@PathParam("p_id") int id) {
        List<Venta> ventas = vm.Listar("Venta");
        if (ventas.isEmpty()) {
            return Response
                    .status(200)
                    .entity("[]").build();
        } else {
            for (Venta v : ventas) {
                if (v.getTotal() == id) {
                    Gson gson = new Gson();
                    return Response
                            .status(200)
                            .entity(gson.toJson(v)).build();
                }
            }
            Gson gson = new Gson();
            return Response
                    .status(200)
                    .entity("[]").build();
        }
    }

    @POST
    public Response postVentas(
            @FormParam("idCli") int idCli,
            @FormParam("fecha") String fecha,
            @FormParam("productos") String productos,
            @FormParam("total") int total) {
        Gson gson = new Gson();
        System.out.println(idCli+" "+fecha+" "+productos+" "+total);
        Cliente c = cm.buscar(idCli, Cliente.class);
        List<Detalle> dlist = Arrays.asList(new Gson().fromJson(productos, Detalle[].class));
        for(Detalle d : dlist){
            System.out.println(d.toString());
            System.out.println(d.prodCod);
            d.setiProductos(pm.buscar(d.prodCod, Producto.class));
            System.out.println(d.getiProductos().toString());
        }
        Venta v = new Venta(c,new Date(fecha),total,null,dlist);
        vm.Guardar(v);
        
        /*
        //ArrayList<detalle> prod = gson.fromJson(productos, ArrayList.class);
        Venta v = new Venta(secuencia++, cliNom, cliCI, fecha, productos, total);

        System.out.println(total);
        ventas.add(v);
        System.out.println("Guardado." + v);
        */
        return Response.status(201).build();
    }

    @DELETE
    @Path("{id}")
    public Response deleteVentas(@PathParam("id") int id) {
        vm.Borrar(id, Venta.class);
        return Response.status(200).build();
    }

    @PUT
    @Path("{v_id}")
    public Response putVentas(
            @PathParam("v_id") int id,
            String body) {
        Gson gson = new Gson();
        Venta V = gson.fromJson(body, Venta.class);
        int pos = 0;
        for (Venta v : ventas) {
            System.out.println(v.getId() + " " + id);
            if (v.getId() == id) {
                System.out.println("Encontre");
                break;
            }
            pos++;
        }/*
        ventas.get(pos).cliNom = V.cliNom;
        ventas.get(pos).cliCI = V.cliCI;
        ventas.get(pos).fecha = V.fecha;
        ventas.get(pos).productos = V.productos;
        ventas.get(pos).total = V.total;
        */
        return Response.status(200).build();
    }
}


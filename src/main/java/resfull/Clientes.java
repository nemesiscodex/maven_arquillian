 /*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package resfull;

import com.google.gson.Gson;
import ejb.ClienteManager;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import jpa.Cliente;


/**
 *
 * @author Alexander
 */
@Path("/clientes")
public class Clientes {
    static List<Cliente> clientes;
    
    @EJB
    ClienteManager C;
        
    @GET
    public Response listarClientes() {
        clientes = C.Listar("Cliente");
        if (this.clientes.isEmpty()) {
           return Response
		   .status(200)
		   .entity("[]").build();
        } else {
           Gson objetogson = new Gson();
            return Response
		   .status(200)
		   .entity(objetogson.toJson(clientes)).build();
        }
    }

    
    
    @GET
    @Path("{c_id}")
    public String mostrarCliente(@PathParam("c_id") int id) {
       clientes = (ArrayList<Cliente>) C.Listar("Cliente");
        if (this.clientes.isEmpty()) {
            return "[]";
        } else {
            for (Cliente cliente : this.clientes) {
                if (cliente.getId() == id) {
                    Gson gson = new Gson();
                    return gson.toJson(cliente);
                }
            }
            Gson gson = new Gson();
            return gson.toJson("No existe el cliente solicitado");
        }
    }

    @POST
    public void crearCliente(
            @FormParam("nombre") String nombre,
            @FormParam("ci") String ci,
            @FormParam("telefono") String telefono,
            @FormParam("direccion") String direccion) {
        
       Cliente c = new Cliente(null, nombre, ci, telefono, direccion);
       C.Guardar(c);
        
    }

    @DELETE
    @Path("{id}")
    public void eliminarCliente(@PathParam("id") int id, String body) {
              C.Borrar(id, Cliente.class);
    }
   
    @PUT
    @Path("{c_id}")
    public void modificarCliente(
             @PathParam("c_id") int id, String json) 
   {
        Gson gson = new Gson();
        Cliente cli = gson.fromJson(json, Cliente.class);
        cli.setId(id);
        C.Actualizar(cli);      

    }

    
}


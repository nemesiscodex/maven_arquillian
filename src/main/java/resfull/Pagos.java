/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package resfull;

import com.google.gson.Gson;
import ejb.PagoManager;
import ejb.VentaManager;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
//import resfull.Ventas;
//import resfull.Venta;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import jpa.Pago;
import jpa.Venta;




/**
 *
 * @author Alexander
 */
@Stateless
@Path("/pagos")
public class Pagos {
    
    static List<Pago> pagos;
   
    @EJB
    PagoManager P;
    @EJB
    VentaManager V;

    
     @GET
    public Response listarPago() {
        pagos = P.Listar("Pago");
        if (this.pagos.isEmpty()) {
           return Response
		   .status(200)
		   .entity("[]").build();
        } else {
           Gson objetogson = new Gson();
            return Response
		   .status(200)
		   .entity(objetogson.toJson(pagos)).build();
        }
    }
    
    @GET
    @Path("{pg_id}")
    public String mostrarPago(@PathParam("pg_id") int id) {
        pagos = (ArrayList<Pago>) P.Listar("Pago");
        if (this.pagos.isEmpty()) {
            return "[]";
        } else {
            for (Pago p : this.pagos) {
                if (p.getId() == id) {
                    Gson gson = new Gson();
                    return gson.toJson(p);
                }
            }
            Gson gson = new Gson();
            return gson.toJson("No existe el pago solicitado");
        }
    }
    
     @POST
     /*Cambiar el void despues*/
    public void crearPago(
            @FormParam("idVenta") Integer idVenta){
          
        Calendar Calendario = Calendar.getInstance();
        String año = Integer.toString(Calendario.get(Calendar.YEAR));
        String mes = Integer.toString(Calendario.get(Calendar.MONTH) + 1);
        String dia = Integer.toString(Calendario.get(Calendar.DATE));
        String fechas = año+"/"+mes+"/"+dia;
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyy/MM/dd");
        Date fecha=null;
        try{
        fecha = formatoDelTexto.parse(fechas);
        }catch(Exception e){}
            Venta vent;
            if((vent=V.buscar(idVenta, Venta.class))==null)
                    return;
           
           Pago p = new Pago(null, idVenta, vent.getTotal(), fecha);
           P.Guardar(p);
    }
    
    @DELETE
    @Path("{id}")
    public void eliminarPago(@PathParam("id") int id, String body) {
             P.Borrar(id, Pago.class);
    }
    
    @PUT
    @Path("{pg_id}")
    public void modificarPagos(
             @PathParam("pg_id") int id, String json) 
   {
       
        Gson gson = new Gson();
        Pago pago = gson.fromJson(json, Pago.class);
        pago.setId(id);
        Calendar Calendario = Calendar.getInstance();
        String año = Integer.toString(Calendario.get(Calendar.YEAR));
        String mes = Integer.toString(Calendario.get(Calendar.MONTH) + 1);
        String dia = Integer.toString(Calendario.get(Calendar.DATE));
        String fechas = año+"/"+mes+"/"+dia;
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("yyy/MM/dd");
        Date fecha=null;
        try{
        fecha = formatoDelTexto.parse(fechas);
        }catch(Exception e){}
            pago.setFecha(fecha);
            Venta vent;
            if((vent=V.buscar(pago.getIdVenta(), Venta.class))==null)
                    return;
      
            pago.setMonto(vent.getTotal());
     
        P.Actualizar(pago);

    }
    
}


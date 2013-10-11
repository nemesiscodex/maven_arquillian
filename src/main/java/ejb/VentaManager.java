/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import jpa.Detalle;
import jpa.Producto;
import jpa.Venta;

/**
 *
 * @author Julio
 */
@Stateless(name="VentaManager")
@LocalBean
public class VentaManager extends ManagerC<Venta>{
    @EJB
    DetalleManager dm;
    @EJB
    ProductoManager pm;
    
    @Override
    public boolean Guardar(Venta in) {
        double cant = 0.0;
        for(Detalle v : in.getDetalle()){
            v.setIdVentas(in);
            System.out.println(v.getiProductos().toString());
            
            Producto p = v.getiProductos();
            int a = p.getStock() - v.getCantidad();
            if(a<0){
                cant = a * v.getPrecio();
                a = p.getStock();
                v.setCantidad(a);
            }
            p.setStock(a);
            pm.Actualizar(p);
            dm.Guardar(v);
        }
        in.setTotal(in.getTotal()+cant);
        super.Guardar(in);
        //in.setDetalle(null);
        return true; //To change body of generated methods, choose Tools | Templates.
    }
    
    @Override
    public boolean Actualizar(Venta in) {
        for(Detalle v : in.getDetalle()){
            dm.Actualizar(in);
        }
        return super.Actualizar(in); //To change body of generated methods, choose Tools | Templates.
    }
    
}

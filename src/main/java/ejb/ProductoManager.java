/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.util.List;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import jpa.Producto;

/**
 *
 * @author Julio
 */
@Stateless(name="ProductoManager")
@LocalBean
public class ProductoManager extends ManagerC<Producto>{

}

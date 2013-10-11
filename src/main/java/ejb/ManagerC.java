/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


/**
 *
 * @author Julio
 */
public class ManagerC<T> implements ManagerI<T>{
    @PersistenceContext(unitName = "Maven")
    protected EntityManager em;
     
    @Override
    public boolean Actualizar(T in) {
        em.merge(in);
        return true;
    }

    @Override 
    public boolean Guardar(T in) {
        em.persist(in);
        return true;
    }

    @Override
    public boolean Borrar(int in,Class<T> clase) {
        T p;
        p = (T) em.find(clase, in);
        if(p == null) return false;
        em.remove(p);
        return true;
    }

    @Override
    public List<T> Listar(String tabla) {
        //return em.createQuery("select object (o) from Producto as o").getResultList();
        
        return em.createQuery("select object (o) from "+tabla+" as o").getResultList();
    }

    @Override
    public T buscar(int id, Class<T> clase) {
       return em.find(clase, id);
    }
    
}

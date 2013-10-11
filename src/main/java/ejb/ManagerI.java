/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.util.List;
import jpa.Cliente;

/**
 *
 * @author Julio
 */
public interface ManagerI<T> {
    public List<T> Listar(String tabla);
    public boolean Actualizar(T in);
    public boolean Guardar(T in);
    public boolean Borrar(int in,Class<T> clase);
    public T buscar(int id, Class<T> clase);
    
}

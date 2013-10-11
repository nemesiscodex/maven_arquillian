/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jpa;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Alexander
 */
@Entity
@Table(name="clientes")
public class Cliente implements Serializable {
    
    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idClientes")
    @Expose
    private Integer id;
    
    @Column(name="nombre", length=45)
    @Expose
    private String nombre;
    
    @Column(name="ci", length=10)
    @Expose
    private String ci;
    
    @Column(name="telefono", length=15)
    @Expose
    private String telefono;
    
    @Column(name="direccion", length=45)
    @Expose
    private String direccion;
     
    public Cliente() {
    }

    public Cliente(Integer id, String nombre, String ci, String telefono, String direccion) {
        this.id = id;
        this.nombre = nombre;
        this.ci = ci;
        this.telefono = telefono;
        this.direccion = direccion;
    }
    

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCi() {
        return ci;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setCi(String ci) {
        this.ci = ci;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + (this.id != null ? this.id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Cliente other = (Cliente) obj;
        if (this.id != other.id && (this.id == null || !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Cliente{" + "id=" + id + ", nombre=" + nombre + ", ci=" + ci + ", telefono=" + telefono + ", direccion=" + direccion + '}';
    }
    
     
    
    
}

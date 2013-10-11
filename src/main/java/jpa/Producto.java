/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jpa;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Julio
 */
@Entity
@Table(name="productos")
public class Producto implements Serializable{
   
    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idProductos")
    private Integer id;
    
    @Column(name="costo")
    private double costo;
    
    @Column(name="nombre", length=45)
    private String nombre;
    
    @Column(name="descripcion", length=45)
    private String descripcion;
    
    @Column(name="stock")
    private int stock;
    
    public Producto() {
    }
    
    public Producto(Integer id, int costo, String nombre, String Descripcion) {
        this.id = id;
        this.costo = costo;
        this.nombre = nombre;
        this.descripcion = Descripcion;
    }

    public int getId() {
        return id;
    }

    public double getCosto() {
        return costo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public int getStock() {
        return stock;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setCosto(double costo) {
        this.costo = costo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 47 * hash + this.id;
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
        final Producto other = (Producto) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Producto{" + "id=" + id + ", costo=" + costo + ", nombre=" + nombre + ", descripcion=" + descripcion + ", stock=" + stock + '}';
    }
    
    
}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jpa;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 *
 * @author Alexander
 */

@Entity
@Table(name="Detalles")
public class Detalle implements Serializable {
    
    @Transient
    @Expose
    public Integer prodCod;
    @Transient
    @Expose
    public String prodNom;
    
    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idDetalles")
    @Expose
    private Integer id;
    
    
    @ManyToOne(optional=false)
    @JoinColumn(name="idVentas") 
    private Venta idVentas;
    
    @ManyToOne(optional=false)
    @JoinColumn(name="idProductos")
    private Producto idProductos;
    
    @Column(name="cantidad")
    @Expose
    private int cantidad;
    
    @Column(name="precio")
    @Expose
    private double precio;
    
    public Detalle(){
    }

    public Detalle(Integer id, Venta idVentas, Producto iProductos, int cantidad, double precio) {
        this.id = id;
        this.idVentas = idVentas;
        this.idProductos = iProductos;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public Venta getIdVentas() {
        return idVentas;
    }

    public Producto getiProductos() {
        return idProductos;
    }

    public int getCantidad() {
        return cantidad;
    }

    public double getPrecio() {
        return precio;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdVentas(Venta idVentas) {
        this.idVentas = idVentas;
    }

    public void setiProductos(Producto iProductos) {
        this.idProductos = iProductos;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        if(this.id != null)
        hash = 37 * hash + this.id;
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
        final Detalle other = (Detalle) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Detalle{" + "id=" + id + ", idVentas=" + idVentas + ", idProductos=" + idProductos + ", cantidad=" + cantidad + ", precio=" + precio + '}';
    }
    
    
    
}

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jpa;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author Alexander
 */

@Entity
@Table(name="pagos")
public class Pago implements Serializable {
    
    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idPagos")
    private Integer id;
    
   // @OneToOne(optional=false)
    //@JoinColumn(name="idVenta")
    @Column(name="idVentas")
    private Integer idVenta;
    
    @Column(name="monto")
    private double monto;
    
    @Column(name="fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;
    
    public Pago() {
    }

    public Pago(Integer id, Integer idVenta, double monto, Date fecha) {
        this.id = id;
        this.idVenta = idVenta;
        this.monto = monto;
        this.fecha = fecha;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdVenta() {
        return idVenta;
    }

    

    public double getMonto() {
        return monto;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdVenta(Integer idVenta) {
        this.idVenta = idVenta;
    }

    public void setMonto(double monto) {
        this.monto = monto;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + this.id;
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
        final Pago other = (Pago) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Pago{" + "id=" + id + ", idVenta=" + idVenta + ", monto=" + monto + ", fecha=" + fecha + '}';
    }

    
}

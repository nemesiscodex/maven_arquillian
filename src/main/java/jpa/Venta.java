/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jpa;

import com.google.gson.annotations.Expose;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 *
 * @author Alexander
 */

@Entity
@Table(name="ventas")
public class Venta implements Serializable{
    
    @Transient
    @Expose
    public Integer idCli;
    @Transient
    @Expose
    public String cliCI;
    @Transient
    @Expose
    public String cliNombre;
    @Transient
    @Expose
    public String productos;
    
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idVentas")
    @Expose
    private Integer id;
    
    @ManyToOne(optional=false)
    @JoinColumn(name="idClientes")
    @Expose
    private Cliente idCliente;
    
    @Column(name="fecha")
    @Temporal(TemporalType.DATE)
    @Expose
    private Date fecha;
    
    @Column(name="total")
    @Expose
    private double total;
    
    
    //@OneToOne(cascade = CascadeType.ALL, mappedBy = "idVenta")
    //private List<Pago> pagoList;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Cliente getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Cliente idCliente) {
        this.idCliente = idCliente;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public List<Detalle> getDetalle() {
        return detalle;
    }

    public void setDetalle(List<Detalle> detalle) {
        this.detalle = detalle;
    }
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idVentas")
    @Expose
    private List<Detalle> detalle;

    public Venta(){
        
    }

    public Venta( Cliente idCliente, Date fecha, double total, List<Pago> pagoList, List<Detalle> detalle) {
       
        this.idCliente = idCliente;
        this.fecha = fecha;
        this.total = total;
        //this.pagoList = pagoList;
        this.detalle = detalle;
    }

    @Override
    public String toString() {
        return "Venta{" + "idCli=" + idCli + ", cliCI=" + cliCI + ", cliNombre=" + cliNombre + ", productos=" + productos + ", id=" + id + ", idCliente=" + idCliente + ", fecha=" + fecha + ", total=" + total + ", detalle=" + detalle + '}';
    }

    
    
}

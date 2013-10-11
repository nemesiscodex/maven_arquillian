/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.util.List;
import javax.ejb.EJB;
import javax.ejb.embeddable.EJBContainer;
import javax.inject.Inject;
import jpa.Cliente;
import org.jboss.arquillian.container.test.api.Deployment;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import static org.junit.Assert.*;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ArchivePaths;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.ByteArrayAsset;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.runner.RunWith;

/**
 *
 * @author Julio
 */
@RunWith(Arquillian.class)
public class ClienteManagerTest {
    @EJB
    ClienteManager container;
    public ClienteManagerTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    @Deployment
    public static WebArchive createTestArchive() {
        return  ShrinkWrap.create(WebArchive.class, "test.war")
            .addPackage(ClienteManager.class.getPackage())
            .addAsManifestResource("persistence.xml")
            .addAsManifestResource("glassfish-resources.xml")
            .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }
    
    
    /**
     * Test of Actualizar method, of class ClienteManager.
     */
    @org.junit.Test
    @org.junit.Ignore
    public void testActualizar() throws Exception {
        System.out.println("Actualizar");
        Cliente in = null;
        boolean expResult = false;
        boolean result = container.Actualizar(in);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of Guardar method, of class ClienteManager.
     */
    @org.junit.Test
    @org.junit.Ignore
    public void testGuardar() throws Exception {
        System.out.println("Guardar");
        Cliente in = null;
        boolean expResult = false;
        boolean result = container.Guardar(in);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of Borrar method, of class ClienteManager.
     */
    @org.junit.Test
    @org.junit.Ignore
    public void testBorrar() throws Exception {
        System.out.println("Borrar");
        int in = 0;
        Class<Cliente> clase = null;
        EJBContainer container = javax.ejb.embeddable.EJBContainer.createEJBContainer();
        ClienteManager instance = (ClienteManager)container.getContext().lookup("java:global/classes/ClienteManager");
        boolean expResult = false;
        boolean result = instance.Borrar(in, clase);
        assertEquals(expResult, result);
        container.close();
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of Listar method, of class ClienteManager.
     */
    @org.junit.Test
    //@org.junit.Ignore
    public void testListar() {
        System.out.println("Listar");
        String tabla = "Cliente";
        List expResult = null;
        System.out.println(container.em);
        List result = container.Listar(tabla);
        //assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of buscar method, of class ClienteManager.
     */
    @org.junit.Test
    @org.junit.Ignore
    public void testBuscar() throws Exception {
        System.out.println("buscar");
        int id = 0;
        Class<Cliente> clase = null;
        EJBContainer container = javax.ejb.embeddable.EJBContainer.createEJBContainer();
        ClienteManager instance = (ClienteManager)container.getContext().lookup("java:global/classes/ClienteManager");
        Cliente expResult = null;
        Cliente result = instance.buscar(id, clase);
        assertEquals(expResult, result);
        container.close();
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
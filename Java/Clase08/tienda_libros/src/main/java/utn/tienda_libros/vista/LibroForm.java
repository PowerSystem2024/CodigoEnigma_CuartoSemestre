package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;

@Component
public class LibroForm extends JFrame {

    LibroServicio libroServicio;
    private JPanel panel;
    private JPanel tablaLibros;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroForm(LibroServicio libroServicio) {
        this.servicio = libroServicio;
        iniciarFormulario();
    }

    private void iniciarFormulario() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimenciones de la ventana
        ToolKit toolkit = ToolKit.getDefaultTookit();

        Dimension tamaioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.width - getWidth()/2);
        setLocation(x,y);
    }

    private void createUIComponents(){
        this.tablaModeloLibros= new DefaultTableModel(0,5);
        String[] cabecera = {"id","Libro","Autor","Precio","Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        //Insstanciar el objeto de JTable
        this.tablaLibros= new JTable(tablaModeloLibros);
        listarLibros();

    }

    private void listarLibros(){
        // Limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtener los libros de la BD
        var libros=libroServicio.listarLibros();
        //Iteramos cada libro
        libros.forEach((libro)->{// Funcion lambda
            //Creammos cada registro para agregarlos a la tabla
            Object[] renglonLibro= {
                    libro.getIdLibro(),
                    libro.getNombreLibro(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias()
            };
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}
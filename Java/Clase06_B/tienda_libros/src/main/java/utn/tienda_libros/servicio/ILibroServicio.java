ackage utn.tiendas_libros.servicio;

import utn.tiendas_libros.modelo.Libro;
import java.util.List;

public interface ILibroServicio {

    public List<Libro> listarLibros();

    public Libro buscarLibroPorId(Integer id);

    public void guardarLibro(Libro libro);

    public void eliminarLibro(Libro libro);
}

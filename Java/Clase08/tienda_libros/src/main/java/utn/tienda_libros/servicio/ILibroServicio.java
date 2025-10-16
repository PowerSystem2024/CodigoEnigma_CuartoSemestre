package utn.tienda_libros.servicio;

import utn.tienda_libros.modelo.Libro;

import java.util.List;

public interface ILibroServicio {

    List<Libro> listar();

    Libro buscarPorId(Integer id);

    void guardar(Libro libro);

    void eliminar(Libro libro);
}
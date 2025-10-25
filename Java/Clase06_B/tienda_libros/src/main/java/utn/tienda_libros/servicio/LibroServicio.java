package utn.tiendas_libros.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.tiendas_libros.modelo.Libro;
import utn.tiendas_libros.repositorio.LibroRepositorio;
import utn.tiendas_libros.servicio.ILibroServicio;

import java.util.List;

@Service
public class LibroServicio implements ILibroServicio {


    @Autowired
    private LibroRepositorio libroRepositorio;

    @Override
    public List<Libro> listarLibros() {
        return libroRepositorio.findAll();
    }

    @Override
    public Libro buscarLibroPorId(Integer idLibro) {
        Libro libro = libroRepositorio.findById(idLibro).orElse(null);
        return libro;

    }

    @Override
    public void guardarLibro(Libro libro) {
        libroRepositorio.save(libro);

    }

    @Override
    public void eliminarLibro(Libro libro) {
        libroRepositorio.delete(libro);

    }
}
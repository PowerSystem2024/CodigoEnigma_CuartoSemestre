package utn.tienda_libros.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.tienda_libros.modelo.Libro;
import utn.tienda_libros.repositorio.LibroRepositorio;

import java.util.List;

@Service
public class LibroServicio implements ILibroServicio {

    @Autowired
    LibroRepositorio repositorio;

    @Override
    public List<Libro> listar() {
        return repositorio.findAll();
    }

    @Override
    public Libro buscarPorId(Integer id) {
        return repositorio.findById(id).orElse(null);
    }

    @Override
    public void guardar(Libro libro) {
        repositorio.save(libro);
    }

    @Override
    public void eliminar(Libro libro) {
        repositorio.delete(libro);
    }
}
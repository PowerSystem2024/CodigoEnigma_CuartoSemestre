package utn.tiendas_libros.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.tiendas_libros.modelo.Libro;

public interface LibroRepositorio extends JpaRepository<Libro, Integer> {


}
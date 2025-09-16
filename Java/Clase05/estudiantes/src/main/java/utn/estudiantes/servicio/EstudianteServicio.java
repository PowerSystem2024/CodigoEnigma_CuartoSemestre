package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiantes2025;
import utn.estudiantes.repositorio.EstudianteRepositorio;

import java.util.List;

@Service
public class EstudianteServicio implements IEstudianteServicio{
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;

    // Clase 4: Recuperar todos los objetos de tipo estudiante para hacer un return y obtener la lista cuando se solicite
    @Override
    public List<Estudiantes2025> listarEstudiantes() {
        List<Estudiantes2025> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }

    // Clase 4: Metodo para buscar estudiante por id
    @Override
    public Estudiantes2025 buscarEstudiantePorId(Integer idEstudiantes2025) {
        Estudiantes2025 estudiante = estudianteRepositorio.findById(idEstudiantes2025).orElse(null);
        return estudiante;
    }

    // Clase 4: Metodos para guardar y eliminar estudiante
    @Override
    public void guardarEstudiante(Estudiantes2025 estudiante) {
        estudianteRepositorio.save(estudiante);
    }

    @Override
    public void eliminarEstudiante(Estudiantes2025 estudiante) {
        estudianteRepositorio.delete(estudiante);
    }
}

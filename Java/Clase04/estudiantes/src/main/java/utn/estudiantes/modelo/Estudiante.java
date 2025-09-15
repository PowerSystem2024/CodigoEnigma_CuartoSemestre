package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
// boilerplate - Codigo Repetitivo
@Data // Aqui se crean los getters and setters
@NoArgsConstructor // Aqui se crea el constructor vacio
@AllArgsConstructor // Aqui se crea el constructor con todos lo atributos
@ToString // Aquí se crea el método ToString
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}

package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2025;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

<<<<<<< HEAD
// Clase 45: Implementar Menu y ejecturarOpciones
=======
>>>>>>> development
@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {
    @Autowired
    private EstudianteServicio estudianteServicio;
    private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

    String nl = System.lineSeparator();

    public static void main(String[] args) {
        logger.info("Iniciando la aplicación");
<<<<<<< HEAD
        //Levantar la fabrica de Spring
=======
>>>>>>> development
        SpringApplication.run(EstudiantesApplication.class, args);
        logger.info("Aplicación finalizada");
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info(nl+"Ejecutando el método run de Spring"+nl);
        var salir = false;
        var consola = new Scanner(System.in);
        while(!salir){
            mostrarMenu();
            salir = ejecutarOpciones(consola);
            logger.info(nl);
<<<<<<< HEAD
        }//Fin ciclo while
    }
        private void mostrarMenu(){
            //logger.info(nl);
            logger.info("""
                    ******* Sistema de Estudiantes *******
                    1. Listar Estudiantes
                    2. Buscar Estudiante
                    3. Agregar Estudiante
                    4. Modificar Estudiante
                    5. Eliminar Estudiante
                    6. Salir
                    Elija una opción:""");
        }

        private boolean ejecutarOpciones(Scanner consola){
            var opcion = Integer.parseInt(consola.nextLine());
            var salir = false;
            switch (opcion){
                case 1 -> {//Listar estudiantes
                    logger.info(nl+"Listado de estudiantes: "+nl);
                    List<Estudiantes2025> estudiantes = estudianteServicio.listarEstudiantes();
                    estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
                }
                case 2 -> {//Buscar estudiantes por id
                    logger.info("Digite el id estudiante: ");
                    var idEstudiante = Integer.parseInt(consola.nextLine());
                    Estudiantes2025 estudiante =
                            estudianteServicio.buscarEstudiantePorId(idEstudiante);
                    if(estudiante != null)
                        logger.info("Estudiante encontrado: "+ estudiante + nl);
                    else
                        logger.info("Estudiante NO encontrado: "+ idEstudiante + nl);
                }
                case 3 -> {//Agregar estudiante
                    logger.info("Agregar estudiante: "+nl);
=======
        }
    }

    // Clase 5 creación de menú
    private void mostrarMenu(){
        logger.info(nl);
        logger.info(nl+"""
                *** Sistema de Estudiantes ***
                1. Listar Estudiantes.
                2. Buscar Estudiantes.
                3. Agregar Estudiantes.
                4. Modificar Estudiantes.
                5. Eliminar Estudiantes.
                6. Salir.
                Elija una opción:""");
    }

    // Clase 5 metodo opciones
    private boolean ejecutarOpciones(Scanner consola){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> {
                logger.info(nl+"Listado de estudiantes: "+nl);
                List<Estudiantes2025> estudiantes = estudianteServicio.listarEstudiantes();
                estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
            }
            case 2 -> {
                logger.info("Ingrese el ID del estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                Estudiantes2025 estudiante =
                        estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if(estudiante != null)
                    logger.info("Estudiante encontrado: "+estudiante + nl);
                else
                    logger.info("Estudiante no encontrado: "+ estudiante + nl);
            }
            case 3 -> {
                logger.info("Agregar estudiante: "+nl);
                logger.info("Nombre: ");
                var nombre = consola.nextLine();
                logger.info("Apellido: ");
                var apellido = consola.nextLine();
                logger.info("Telefono: ");
                var telefono = consola.nextLine();
                logger.info("Email: ");
                var email = consola.nextLine();
                // Crear el objeto estudiante sin el id
                var estudiante = new Estudiantes2025();
                estudiante.setNombre(nombre);
                estudiante.setApellido(apellido);
                estudiante.setTelefono(telefono);
                estudiante.setEmail(email);
                estudianteServicio.guardarEstudiante(estudiante);
                logger.info("Estudiante agregado: "+estudiante+nl);
            }
            case 4 -> {
                logger.info("Modificar estudiante: "+nl);
                logger.info("Ingrese el ID estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                // Buscar el estudiante a modificar
                Estudiantes2025 estudiante =
                        estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if(estudiante != null){
>>>>>>> development
                    logger.info("Nombre: ");
                    var nombre = consola.nextLine();
                    logger.info("Apellido: ");
                    var apellido = consola.nextLine();
                    logger.info("Telefono: ");
                    var telefono = consola.nextLine();
                    logger.info("Email: ");
                    var email = consola.nextLine();
<<<<<<< HEAD
                    //Crear el objeto estudiante sin el id
                    var estudiante = new Estudiantes2025();
=======
>>>>>>> development
                    estudiante.setNombre(nombre);
                    estudiante.setApellido(apellido);
                    estudiante.setTelefono(telefono);
                    estudiante.setEmail(email);
                    estudianteServicio.guardarEstudiante(estudiante);
<<<<<<< HEAD
                    logger.info("Estudiante agregado: "+estudiante+nl);
                }
                case 4 -> {//Modificar estudiante
                    logger.info("Modificar estudiante: "+nl);
                    logger.info("Ingrese el id estudiante: ");
                    var idEstudiante = Integer.parseInt(consola.nextLine());
                    //Buscamos el estudiante a modificar
                    Estudiantes2025 estudiante =
                            estudianteServicio.buscarEstudiantePorId(idEstudiante);
                    if(estudiante != null){
                        logger.info("Nombre: ");
                        var nombre = consola.nextLine();
                        logger.info("Apellido: ");
                        var apellido = consola.nextLine();
                        logger.info("Telefono: ");
                        var telefono = consola.nextLine();
                        logger.info("Email: ");
                        var email = consola.nextLine();
                        estudiante.setNombre(nombre);
                        estudiante.setApellido(apellido);
                        estudiante.setTelefono(telefono);
                        estudiante.setEmail(email);
                        estudianteServicio.guardarEstudiante(estudiante);
                        logger.info("Estudiante modificado: "+estudiante+nl);
                    }
                    else
                        logger.info("Estudiante NO encontrado con el id: "+ idEstudiante+nl);
                }
                case 5 -> {//Eliminar estudiante
                    logger.info("Eliminar estudiante: "+nl);
                    logger.info("Digite el id estudiante: ");
                    var idEstudiante = Integer.parseInt(consola.nextLine());
                    //Buscamos el id estudiante a eliminar
                    var estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
                    if(estudiante != null){
                        estudianteServicio.eliminarEstudiante(estudiante);
                        logger.info("Estudiante eliminado: "+estudiante+nl);
                    }
                    else
                        logger.info("Estudiante NO encontrado con id: "+idEstudiante+nl);
                }
                case 6 -> {//Salir
                    logger.info("Hasta pronto!"+nl+nl);
                    salir = true;
                }
                default -> logger.info("Opción no reconocida: "+opcion+nl);
            }//Fin switch
            return salir;
        }//Fin metodo ejecutarOpciones

=======
                    logger.info("Estudiante modificado: "+estudiante+nl);
                }
                else
                    logger.info("Estudiante no encontrado con el ID: "+ idEstudiante+nl);
            }
            case 5 -> {
                logger.info("Eliminar estudiante: "+nl);
                logger.info("Ingrese el ID estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                // Buscar el id a eliminar
                var estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
                if(estudiante != null){
                    estudianteServicio.eliminarEstudiante(estudiante);
                    logger.info("Estudiante eliminado: "+estudiante+nl);
                }
                else
                    logger.info("Estudiante no encontrado con el ID: "+estudiante+nl);
            }
            case 6 -> {
                logger.info("Hasta pronto!"+nl+nl);
                salir = true;
            }
        }
        return salir;
    }
>>>>>>> development
}



/* Resumen de cambios para que todo deje de dar error
-Cambiar dependencias dentro de pom.xml, incluidas las de MySQL
-Error de "Public Key Retrieval is not allowed" -> (Según GPT): Ocurre con usuarios MySQL usando el plugin caching_sha2_password...
...se solucionó agregando a la URL de conexión el parámetro allowPublicKeyRetrieval=true y useSSL=false (esto dentro de \resources\application.properties...
... también cambié la configuración
-Ajustar lo que es Hibernate y JPA también en application.properties
-Toda la parte de "Logging" dentro de application.properties es para limpiar la consola a la hora de ejecutar main
<<<<<<< HEAD
 */
=======

- El WARNING que figura al ejecutar no es un error, es un aviso sobre seguridad indicando que IntelliJ está usando un metodo nativo que Java considera restringido, NO afecta al funcionamiento
 */
>>>>>>> development

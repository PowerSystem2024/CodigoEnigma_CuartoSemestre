package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.servicio.EstudianteServicio;

// Clase 4: Implementar CommandLineRunner, crear el metodo run, configurar logger, configurar main y run
@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {
    @Autowired
    private EstudianteServicio estudianteServicio;
    private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

    String nl = System.lineSeparator();

    public static void main(String[] args) {
        logger.info("Iniciando la aplicación");
        SpringApplication.run(EstudiantesApplication.class, args);
        logger.info("Aplicación finalizada");
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info(nl+"Ejecutando el método run de Spring"+nl);
    }
}



/* Resumen de cambios para que todo deje de dar error
-Cambiar dependencias dentro de pom.xml, incluidas las de MySQL
-Error de "Public Key Retrieval is not allowed" -> (Según GPT): Ocurre con usuarios MySQL usando el plugin caching_sha2_password...
...se solucionó agregando a la URL de conexión el parámetro allowPublicKeyRetrieval=true y useSSL=false (esto dentro de \resources\application.properties...
... también cambié la configuración
-Ajustar lo que es Hibernate y JPA también en application.properties
-Toda la parte de "Logging" dentro de application.properties es para limpiar la consola a la hora de ejecutar main
 */

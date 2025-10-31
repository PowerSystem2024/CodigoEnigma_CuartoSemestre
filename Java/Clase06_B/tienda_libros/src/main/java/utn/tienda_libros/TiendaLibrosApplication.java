package utn.tiendas_libros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import utn.tiendas_libros.vista.LibroFrom;

import java.awt.*;

@SpringBootApplication
public class TiendasLibrosApplication {

	public static void main(String[] args) {


		ConfigurableApplicationContext contextoSpring =
				new SpringApplicationBuilder(TiendasLibrosApplication.class)
						.headless(false)
						.web(WebApplicationType.NONE)
						.run(args);

		//ejecutamos el codigo para cargar el formulario
		EventQueue.invokeLater(() ->{ //Metodo Lamda
			//Obtenemos el objeto from a traves del spring
			LibroFrom libroFrom = contextoSpring.getBean(LibroFrom.class);
			libroFrom.setVisible(true);
		});
	}
}
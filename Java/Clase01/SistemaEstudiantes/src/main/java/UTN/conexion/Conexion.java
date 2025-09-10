/*
 * Hacemos la conexión con la base de datos
 * Se continua con la clase 11A
 */

package UTN.conexion;

import com.mysql.cj.jdbc.Driver;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;

        //Variables para conectarnos a la base de datos
        var baseDatos = "estudiantes";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        //Esta es la url
        var usuario = "root";
        var password = "admin";

        // Cargamos la clase del driver de mysql
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url,usuario,password);
        }
        catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrio un error en la conexion: "+e.getMessage());
        }// Fin del catch
        return conexion;
    }// Fin metodo Connection
}// Fin clase Conexion

/*
 * Se comienza con el proyecto Sistema Estudiantes de la Clase 11 de Java 3
 * Se realiza la descarga desde google de: maven main-connector java
 * https://mvnrepository.com/artifact/mysql/mysql-connector-java
 * Esto se inserta dentro del archivo xml dentro de la etiqueta dependencias
 * No olvidar sincronizar desde la pestaña Maven, en 'sincronize'
 * Se continua con la clase 11A
 */


package UTN;

import UTN.conexion.Conexion;

public class Main {
    public static void main(String[] args) {
        var conexion = Conexion.getConnection();
        if(conexion != null)
            System.out.println("Conexion exitosa: "+conexion);
        else
            System.out.println("Error al conectarse");
    }// Fin main
}// Fin clase
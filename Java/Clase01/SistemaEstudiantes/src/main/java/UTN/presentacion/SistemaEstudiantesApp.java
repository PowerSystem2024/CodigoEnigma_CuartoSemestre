/*
 * Se comienza con el proyecto Sistema Estudiantes de la Clase 11 de Java 3
 * Se realiza la descarga desde google de: maven main-connector java
 * https://mvnrepository.com/artifact/mysql/mysql-connector-java
 * Esto se inserta dentro del archivo xml dentro de la etiqueta dependencias
 * No olvidar sincronizar desde la pestaña Maven, en 'sincronize'
 * Se continua con la clase 11A
 */

package UTN.presentacion;

import UTN.conexion.Conexion;
import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;
import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        //var conexion = Conexion.getConnection();
        // if(conexion != null)
        //    System.out.println("Conexion exitosa: "+conexion);
        //else
        //    System.out.println("Error al conectarse");
        var salir = false;
        var consola = new Scanner(System.in); //Para leer informacion en la consola
        var estudianteDao = new EstudianteDAO(); // Esta instancia debe hacerse una vez
        while(!salir){
            try {
                mostrarMenu();//Mostramos el menu
                //Este será el metodo ejecutarOpciones que devolvera un booleano
                salir = ejecutarOpciones(consola, estudianteDao); //Este arroja una excepcion
            } catch(Exception e){
                System.out.println("Ocurrió un error al ejecturar la operación: "+e.getMessage());
            }
        }
        // Fin while
    }// Fin main

    public static void mostrarMenu(){
        System.out.print("""
                ***** Sistema de Estudiantes *****
                1. Listar Estudiantes
                2. Buscar Estudiantes
                3. Agregar Estudiantes
                4. Modificar Estudiantes
                5. Eliminar Estudiantes
                6. Salir
                Elige una opción:
                """);
    }
    //Metodo para ejecturar las opciones, va a regresar un valor booleano, ya que es el que
    //puede modificar el valor de la variable salir, si es verdadero termina el ciclo while
    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch(opcion){
            case 1 -> { //Listar estudiantes
                System.out.println("Listado de Estudiantes...");
                //no muestra la información, solo recupera la info y regresa una lista
                var estudiantes = estudianteDAO.listarEstudiantes();//recibe el listado
                //vamos a iterar cada objeto de tipo estudiante
                estudiantes.forEach(System.out::println);//para imprimir la lista
            } //Fin case 1
            case 2 -> { //Buscar estudiante por id
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if(encontrado)
                    System.out.println(" Estudiante encontrado: "+estudiante);
                else
                    System.out.println(" Estudiante NO encontrado: "+estudiante);
            } //Fin case 2
            case 3 -> { //Agregar estudiante
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //crear objeto estudiante(sin id)
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if(agregado)
                    System.out.println("Estudiante agregado: "+estudiante);
                else
                    System.out.println("Estudiante NO agregado: "+estudiante);
            } //Fin case 3
            case 4 -> { //Modificar estudiante
                System.out.println("Modificar estudiante: ");
                //Aqui lo primero es especificar cual es el id del objeto a modificar
                System.out.println("Id Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //crear objeto estudiante a modificar
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if(modificado)
                    System.out.println("Estudiante modificado: "+estudiante);
                else
                    System.out.println("Estudiante NO modificado: "+estudiante);
            } //Fin case 4
            case 5 -> { //Eliminar estudiante
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if(eliminado)
                    System.out.println("Estudiante eliminado: "+estudiante);
                else
                    System.out.println("Estudiante NO eliminado: "+estudiante);
            } //Fin case 5
            case 6 -> { //Eliminar estudiante
                System.out.println("Hasta pronto!");
                salir = true;
            }//Fin case 6
            default -> System.out.println("Opción no reconocida, ingrese otra opción.");
    }//Fin switch
        return salir;
        }
}// Fin clase
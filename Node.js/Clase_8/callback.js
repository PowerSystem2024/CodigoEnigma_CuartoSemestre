// Definimos una función llamada 'soyAsincrona'.
// Esta función acepta otra función como parámetro, a la que llamaremos 'miCallback'.
function soyAsincrona(miCallback) {

    // Usamos 'setTimeout' para simular una operación que tarda tiempo (como una petición a una base de datos o a una API).
    // setTimeout no bloquea el programa; simplemente agenda la ejecución de la función interna para más tarde.
    setTimeout(function() {
        // Este código se ejecutará después de que pasen los 1000 milisegundos (1 segundo).
        
        // 1. Mostramos un mensaje para indicar que la tarea asíncrona se ha completado.
        console.log('Hola, soy una funcion asincrona');
        
        // 2. Ejecutamos la función 'miCallback' que recibimos como parámetro.
        // Esto nos permite ejecutar un código específico justo después de que termine nuestra tarea asíncrona.
        miCallback();
        
    }, 1000); // El tiempo de espera en milisegundos.
}

// --- Inicio del flujo principal del programa ---

// Esta línea se ejecuta inmediatamente. Es lo primero que veremos en la consola.
console.log('************ Iniciando el proceso... ************');

// Llamamos a nuestra función asíncrona.
// Le pasamos como argumento (como 'miCallback') una función anónima.
// Esta función anónima es lo que queremos que se haga una vez que 'soyAsincrona' termine su tarea.
soyAsincrona(function() {
    // Este mensaje se mostrará cuando el callback sea ejecutado, es decir, después del segundo de espera.
    console.log('Finalizando el primer proceso...');
});

// El programa no espera aquí. Continúa si hubiera más código debajo.
// El resultado final en la consola aparecerá en el orden en que las tareas se completan, no en el orden en que están escritas.

// Definimos una función llamada 'hola' que simula un saludo asíncrono.
// Recibe dos parámetros:
// 1. 'nombre': El nombre de la persona a saludar.
// 2. 'miCallback2': Una función que se ejecutará DESPUÉS de que el saludo se complete.
function hola(nombre, miCallback2) {
    // Usamos setTimeout para simular que esta operación tarda 1 segundo.
    setTimeout(function() {
        console.log('---------------- Proxima funcion --------------------');
        // Muestra el saludo en la consola.
        console.log('Hola, ' + nombre);
        // Una vez que hemos saludado, ejecutamos el callback que nos pasaron.
        // Es importante pasarle el 'nombre' al callback para que la siguiente función
        // en la cadena pueda usarlo también.
        miCallback2(nombre);
    }, 1000); // Espera 1 segundo (1000 ms).
}

// Definimos una función 'adios' que simula una despedida asíncrona.
// Recibe dos parámetros:
// 1. 'nombre': El nombre para la despedida.
// 2. 'miCallback3': Una función que se ejecutará DESPUÉS de que la despedida se complete.
function adios(nombre, miCallback3) {
    // Usamos setTimeout para simular que esta operación tarda 1.5 segundos.
    setTimeout(function() {
        // Muestra la despedida en la consola.
        console.log('Adios, ' + nombre);
        // Ejecutamos el callback para señalar que esta última parte del proceso ha terminado.
        miCallback3();
    }, 1500); // Espera 1.5 segundos (1500 ms).
}

// --- Inicio del flujo de ejecución ---

// 1. Llamamos a la primera función: 'hola'.
// Le pasamos el nombre 'Carlos' y una función anónima como su callback ('miCallback2').
// Esta función anónima se ejecutará DESPUÉS de que 'hola' termine su trabajo (después de 1 segundo).
hola('Carlos', function(nombre) {
    
    // 2. Este es el cuerpo de la función callback de 'hola'. Se ejecuta después del primer segundo.
    // Ahora, dentro de este callback, llamamos a la función 'adios'.
    // Usamos el 'nombre' que 'hola' nos pasó para mantener la consistencia.
    // También le pasamos a 'adios' su propio callback ('miCallback3'), que es otra función anónima.
    adios(nombre, function() {

        // 3. Este es el cuerpo de la función callback de 'adios'. Se ejecuta después del segundo setTimeout (1.5 segundos después de 'adios').
        // Esta es la última acción en nuestra cadena de operaciones.
        console.log('************ Finalizando el proceso... ************');
    });
    
});

/*
    RESUMEN DE LA EJECUCIÓN:
    1. Se llama a `hola('Carlos', ...)`.
    2. El programa no espera.
    3. (Tras 1 segundo) Se ejecuta el `console.log('Hola, Carlos')` y se llama al primer callback.
    4. Dentro de ese callback, se llama a `adios(nombre, ...)`.
    5. El programa sigue sin esperar.
    6. (Tras 1.5 segundos más) Se ejecuta el `console.log('Adios, Carlos')` y se llama al segundo callback.
    7. Dentro de ese último callback, se ejecuta el `console.log('Finalizando el proceso...')`.
*/

// hola('Juan', function(){})
// adios('Juan', function(){})
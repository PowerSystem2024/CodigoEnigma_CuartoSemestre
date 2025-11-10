/*
La diferencia principal es que las Promises te permiten escribir código asíncrono de una manera más limpia, 
legible y secuencial, mientras que los callbacks te obligan a anidar funciones, lo que rápidamente 
crea un código desordenado y difícil de manejar conocido como "Callback Hell".

En resumen:
- Callbacks: Anidan el flujo de control. Nested.
- Promises: Encadenan el flujo de control. Chained.
*/

function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre)
            resolve(nombre)
        }, 1000)
    })
}

function hablar(nombre) {
    return new Promise ((resolve, reject) => { //Usamos la sintaxis ES6
        setTimeout(function(){
            console.log('Situacion conversacional :)')
            resolve(nombre)
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Adios, ' + nombre)
            //resolve()
            reject('Hay un error!')
        }, 1000)
    })
}

// Llamamos a la funcion
console.log('Iniciando el proceso... ')
hola('Juan')
    .then(hablar)
    .then(adios)
    .then((nombre) => {console.log('Terminando el proceso')}) //Accedemos al contenedor (Promises) con .then
    .catch(error => {
        console.log('Ha habido un error: ');
        console.log(error);
    })
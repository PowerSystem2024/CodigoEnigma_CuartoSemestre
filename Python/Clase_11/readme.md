## Parte 6: Entorno Profesional de Python - Manejo de Dependencias y API Requests

En esta clase, exploramos la manera profesional de gestionar las dependencias de un proyecto para que sea fácilmente reproducible por otros desarrolladores y, luego, cómo consumir una API externa para obtener datos.
Manejo de Dependencias con requirements.txt
Para que un proyecto sea profesional y colaborativo, es fundamental que cualquier desarrollador pueda replicar el entorno de trabajo, instalando exactamente las mismas librerías y versiones que se usaron originalmente.
1. ¿Qué es requirements.txt?

Es un archivo de texto que lista todas las dependencias externas de un proyecto de Python. Permite automatizar la instalación de estas librerías, asegurando que todos los miembros del equipo trabajen con las mismas versiones.

2. Generar el archivo requirements.txt

Dentro de tu entorno virtual activado, puedes generar este archivo automáticamente con el siguiente comando:

```sh
pip3 freeze > requirements.txt
pip3 freeze: Lista todos los paquetes instalados en el entorno actual junto con sus versiones exactas.
```


>: Es un operador de redirección que envía la salida del comando anterior al archivo requirements.txt, creándolo o sobrescribiéndolo.

3. Instalar Dependencias desde requirements.txt

Cuando un nuevo colaborador se une al proyecto, no necesita instalar cada librería una por una. Simplemente ejecuta el siguiente comando, y pip se encargará de todo:


```pip3 install -r requirements.txt```

La bandera -r le indica a pip que instale las dependencias listadas en el archivo especificado.
4. Documentar los Pasos en README.md
Es una buena práctica documentar en el archivo README.md los comandos necesarios para que un nuevo colaborador pueda poner en marcha el proyecto.

## Mi Proyecto de Python

Este proyecto consume una API para mostrar información sobre razas de perros.

## Cómo Contribuir

Para levantar el entorno y colaborar, sigue estos pasos:

1.  **Clona el repositorio:**
    ```sh
    git clone https://...
    ```

2.  **Navega al directorio y crea el entorno virtual:**
    ```sh
    cd mi-proyecto
    python3 -m venv env 
    ```
    *Nota: El entorno virtual (`env`) no se comparte en GitHub.*

3.  **Activa el entorno virtual:**
    -   En Linux/macOS:
        ```sh
        source env/bin/activate
        ```
    -   En Windows:
        ```sh
        .\env\Scripts\activate
        ```

4.  **Instala las dependencias:**
    ```sh
    pip3 install -r requirements.txt
    ```
    *El flag `-r` significa "reutilizar", instalando todo lo que contiene el archivo.*

5.  **Ejecuta el programa:**
    ```sh
    python3 main.py
    ```
Consumo de una API con requests
Para interactuar con servicios web y obtener datos, utilizamos la librería requests, una de las más populares en Python para hacer peticiones HTTP.
1. Realizando una Petición GET
El siguiente script muestra cómo hacer una petición GET a la Dog CEO API para obtener una lista de razas de perros.

```sh
# main.py
import requests

def get_razas():
    # Hacemos la petición a la URL de la API
    r = requests.get('https://dog.ceo/api/breeds/list')
    
    # Imprimimos el código de estado (200 significa que fue exitosa)
    print(r.status_code)
    
    # r.text nos devuelve el contenido como un string
    # print(type(r.text))
    
    # Para trabajar con la estructura de datos, lo convertimos a formato JSON (un diccionario en Python)
    razas = r.json()
    
    # La respuesta JSON es un diccionario, iteramos sobre sus valores
    # #encontramos un diccionario con listas
    for raza in razas.values():
        print(f"Raza de los perritos: {raza}")

# Ejecutamos la función
get_razas()
```

2. Comprendiendo la Respuesta JSON

Al inspeccionar la respuesta de la API, notamos que no es un texto plano, sino una estructura de datos.
* r.text: Devuelve el contenido de la respuesta como una cadena de texto (string).
* r.json(): Parsea la respuesta (que se espera esté en formato JSON) y la convierte en un objeto de Python, generalmente un diccionario o una lista.

En nuestro caso, la respuesta es un diccionario. Para acceder a la lista de razas, necesitamos iterar sobre los valores del diccionario con el método .values().

```sh
# Iteramos sobre los valores del diccionario obtenido del JSON
for raza in razas.values():
    # Utilizamos la función para los valores
    print(f"Raza de los perritos: {raza}")
```

Al ejecutar el script (python3 main.py), la salida nos muestra un código 200 y luego la lista de razas, demostrando que la conexión y el procesamiento de datos fueron exitosos.
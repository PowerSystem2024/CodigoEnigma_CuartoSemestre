
# **Entorno Profesional en Python - Parte 7**
En esta séptima parte de nuestro curso sobre el entorno profesional en Python, vamos a dar un paso fundamental: pasar de analizar datos y ejecutar scripts a construir y desplegar un servicio web completo. Combinaremos nuestro conocimiento de Python y Pandas con herramientas de backend como **FastAPI** y finalmente lo empaquetaremos todo en un contenedor de **Docker** para asegurar que sea portable y escalable.

## **Parte 1: Resumen del Trabajo Previo - Análisis y Visualización**
Antes de adentrarnos en el backend, recordemos lo que hemos logrado hasta ahora. En la primera sección de este módulo, nuestro objetivo fue leer, procesar y visualizar datos de un archivo CSV sobre la población mundial.

* **Lectura y Filtrado de Datos:** Utilizamos la librería **Pandas** para leer un archivo data.csv. Implementamos filtros para aislar datos específicos, como los países de un continente en particular (por ejemplo, África y Sudamérica).

* **Generación de Gráficos:** Con la ayuda de **Matplotlib**, creamos visualizaciones para entender mejor los datos:
    * **Gráficos de pastel (pie charts)** para mostrar la distribución porcentual de la población entre los países de un continente.
    * **Gráficos de barras** para visualizar la evolución de la población de un país a lo largo del tiempo.
* **Uso de Librerías:** Las herramientas clave fueron pandas para la manipulación de datos y matplotlib para la creación de las visualizaciones, demostrando un flujo de trabajo típico en el análisis de datos.

## **Parte 2: Introducción a FastAPI - Construyendo Nuestro Servidor Web**
Ahora, vamos a construir nuestro propio servidor web. En lugar de solo consumir datos, crearemos una API que pueda servirlos. Para esto, utilizaremos FastAPI, un framework de Python moderno y de alto rendimiento.

### **¿Qué son FastAPI y Uvicorn?**
* **FastAPI:** Es un framework web para construir APIs con Python. Es extremadamente rápido, fácil de usar y genera automáticamente documentación interactiva para tus endpoints, lo cual es increíblemente útil para el desarrollo.
* **Uvicorn:** Es un servidor ASGI (Asynchronous Server Gateway Interface) de alto rendimiento. FastAPI necesita un servidor como Uvicorn para ejecutar la aplicación y manejar las peticiones de manera asíncrona, lo que lo hace muy eficiente.

### **Paso a Paso - Creando el Servidor:**
1. **Instalación de Dependencias:**
Primero, activamos nuestro entorno virtual y procedemos a instalar las librerías necesarias.
```sh
# Instalar FastAPI
pip3 install fastapi

# Instalar Uvicorn con soporte estándar para un mejor rendimiento
pip3 install "uvicorn[standard]"
```

2. **Creación del ```requirements.txt:```**

Una vez instaladas, es una buena práctica profesional congelar las dependencias en un archivo requirements.txt. Esto asegura que cualquier otro entorno (incluido nuestro futuro contenedor Docker) pueda replicar exactamente las mismas versiones de las librerías.

```pip3 freeze > requirements.txt```

3. **Escribiendo nuestra primera API con ```main.py```:**
Creamos un archivo main.py en nuestro directorio web-server y escribimos el código para nuestra API.

```sh
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

# Creamos nuestra primera instancia de FastAPI
app = FastAPI()

# Primera ruta o endpoint principal
# El decorador @app.get indica que esta función maneja peticiones GET a la raíz ('/')
@app.get('/')
def get_list():
    # FastAPI convierte automáticamente listas y diccionarios a formato JSON
    return [1, 2, 3]

# Segunda ruta para devolver un diccionario
@app.get('/contact')
def get_contact():
    return {'name': 'UTN'}
```

4. **Ejecutando el Servidor Localmente:**

Para probar que nuestro servidor funciona, lo lanzamos desde la terminal con Uvicorn.
```# uvicorn main:app --reload```

    * main: Se refiere al archivo main.py.
    * app: Se refiere a la instancia app = FastAPI() que creamos dentro del archivo.
    * --reload: Este flag es muy útil durante el desarrollo, ya que reinicia el servidor automáticamente cada vez que detecta un cambio en el código.

Al ejecutar esto, podrás acceder desde tu navegador a http://127.0.0.1:8000 y verás [1,2,3]. Si vas a http://127.0.0.1:8000/contact, verás {"name":"UTN"}.

## **Parte 3: Dockerización de Nuestro Web Server**
El siguiente paso es empaquetar nuestra aplicación FastAPI en un contenedor Docker. Esto nos dará un entorno aislado y portable, listo para ser desplegado en cualquier lugar.

1. **Configuración del Entorno Docker:**
Asegúrate de tener Docker Desktop funcionando correctamente. Si estás en Windows, es fundamental activar la integración con **WSL 2 (Windows Subsystem for Linux)** en la configuración de Docker Desktop. Además, si encuentras problemas de permisos al conectar con el daemon de Docker, recuerda ejecutar los comandos con ```sudo```.

2. **Preparando los Archivos para Docker:**
Para este proceso, vamos a reutilizar y adaptar la configuración que ya teníamos de un proyecto anterior. Esta es una técnica muy común en el desarrollo profesional: no reinventar la rueda.

* **Copia de archivos:** Copiamos ```Dockerfile``` y ```docker-compose.yml``` de nuestro proyecto anterior (app) a nuestro nuevo proyecto web-server.

* **Modificando el ```Dockerfile```**:
Este archivo define la "receta" para construir nuestra imagen de contenedor.

```sh
# Usamos la imagen oficial de Python 3.10.12 como base
FROM python:3.10.12

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo de dependencias
COPY requirements.txt /app/requirements.txt

# Instalamos las dependencias
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# Copiamos todo el contenido del proyecto al directorio de trabajo
COPY . /app

# Comando que se ejecutará al iniciar el contenedor
# Lanza el servidor Uvicorn, haciéndolo accesible desde fuera del contenedor
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
```

* **Modificando el ```docker-compose.yml```:**
Este archivo nos ayuda a orquestar y gestionar nuestro servicio.

```sh
services:
  web-server: # Cambiamos el nombre del servicio para que sea más descriptivo
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80" # Mapeamos el puerto 80 del host al puerto 80 del contenedor
    volumes:
      - ./:/app # Sincronizamos el directorio local con el del contenedor
```

3. **El Truco de los Volúmenes para un Desarrollo Eficiente:**
La línea volumes: - ./:/app es un truco fundamental para el día a día con Docker. En lugar de tener que reconstruir la imagen (docker-compose build) cada vez que hacemos un cambio en nuestro código, este "volumen" enlaza nuestro directorio local con el directorio dentro del contenedor. De esta forma, cualquier cambio que guardemos en nuestro main.py se reflejará en tiempo real en la aplicación que se está ejecutando dentro del contenedor.

4. **Construcción y Ejecución del Contenedor:**
Finalmente, desde la terminal, dentro del directorio web-server, ejecutamos los siguientes comandos:
```sh
# Construye la imagen del contenedor según lo definido en docker-compose.yml
docker-compose build

# Levanta el servicio en segundo plano (detached mode)
docker-compose up -d
```

Si todo sale bien, ahora podrás acceder a ```http://localhost/``` o ```http://localhost/contact``` en tu navegador y verás tu API funcionando, ¡ahora desde dentro de un contenedor Docker!

Con esto, hemos completado un ciclo de desarrollo profesional: desde la creación de una aplicación web funcional con FastAPI hasta su encapsulación en un contenedor Docker, dejándola lista para su despliegue en cualquier entorno compatible.
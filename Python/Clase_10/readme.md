## Python en Entorno Profesional : Parte 5
Este repositorio resume los conceptos y comandos de la Clase 10. El objetivo es establecer un flujo de trabajo profesional para proyectos de Python utilizando Git, GitHub y entornos virtuales (venv).
1. Flujo de Trabajo con Git y GitHub
Se detalla el proceso para clonar un repositorio, gestionar ramas y subir cambios.
code
Bash
### 1. Crear un directorio para el proyecto y acceder a él
mkdir py-project
cd py-project

### 2. Clonar el repositorio base desde GitHub
git clone https://github.com/ArielBetancud22/python-pip.git

### 3. Ingresar a la carpeta del proyecto y abrirlo en VSCode
cd python-pip
code .

### 4. Listar las ramas (inicialmente solo 'main')
git branch

### 5. Crear nuevas ramas para trabajar en funcionalidades sin afectar la principal
git branch second
git branch profe
git branch ariel22

### 6. Realizar cambios, añadirlos y confirmarlos con un commit
git status
git add .
git commit -m "Mi primer archivo"

### 7. Subir los cambios al repositorio remoto
git push origin main
2. Solución al Problema de Autenticación en GitHub: Personal Access Token (PAT)
Desde agosto de 2021, GitHub ya no acepta la contraseña de la cuenta para autenticar operaciones de Git en la terminal. En su lugar, se debe usar un Token de Acceso Personal (PAT).
Problema: Al ejecutar git push, la terminal solicita un usuario y contraseña, pero rechaza la contraseña habitual de la cuenta.
Solución: Generar un PAT en GitHub y usarlo como contraseña.
Pasos para generar un Access Token:
En GitHub, ve a tu perfil y haz clic en Settings.
En el menú de la izquierda, navega a Developer settings.
Selecciona Personal access tokens y luego Tokens (classic).
Haz clic en Generate new token (classic).
Asígnale un nombre descriptivo al token en el campo Note (ej: "Token para mi terminal WSL").
Define una fecha de Expiration para el token (se recomienda 30 o 90 días por seguridad).
Selecciona los permisos (scopes). Para clonar, descargar y subir cambios, marca la casilla repo.
Haz clic en Generate token.
¡Muy importante! Copia el token generado inmediatamente y guárdalo en un lugar seguro. No podrás volver a verlo una vez que abandones la página.
Cuando la terminal te pida la contraseña, pega el Access Token que acabas de generar.
3. Entornos Virtuales en Python (venv)
Los entornos virtuales son fundamentales para aislar las dependencias de cada proyecto, evitando conflictos entre las versiones de las librerías.
code
Bash
### 1. Instalar el paquete para crear entornos virtuales (si no está disponible)
sudo apt install -y python3-venv

### 2. Crear un entorno virtual. 'env' es el nombre de la carpeta que lo contendrá.
python3 -m venv env

### 3. Activar el entorno virtual. La terminal mostrará (env) al principio.
source env/bin/activate

### 4. Para desactivar el entorno y volver al sistema global
deactivate
4. Manejo de Dependencias con pip
Una vez activado el entorno virtual, los paquetes se instalan de forma aislada.
code
Bash
## Verificar la ubicación de Python y Pip dentro del entorno virtual
which python3
which pip3
### Ambas rutas apuntarán a la carpeta 'env/bin/'

### Instalar la última versión de una librería (ej. Matplotlib)
pip3 install matplotlib

### Instalar una versión específica de una librería
pip3 install matplotlib==3.5.0

### Listar los paquetes instalados en el entorno virtual activo
pip3 freeze
Buenas Prácticas: requirements.txt
Para que otros desarrolladores (o tú mismo en otro equipo) puedan replicar el entorno, se utiliza un archivo requirements.txt.
code
Bash
### Generar el archivo con la lista de dependencias y sus versiones
pip3 freeze > requirements.txt

### Para instalar todas las dependencias listadas en el archivo en un nuevo entorno
pip install -r requirements.txt
Resumen de Comandos Clave
git clone <url>: Descarga un repositorio.
git branch <nombre>: Crea una nueva rama.
git checkout <nombre>: Cambia a la rama especificada.
git add .: Añade todos los cambios al área de staging.
git commit -m "mensaje": Confirma los cambios con un mensaje.
git push origin <rama>: Sube los cambios a la rama remota.
git pull origin <rama>: Descarga y fusiona cambios desde la rama remota.
git merge <rama>: Fusiona los cambios de otra rama en la actual.
python3 -m venv <nombre_env>: Crea un entorno virtual.
source <nombre_env>/bin/activate: Activa el entorno virtual.
pip3 freeze: Lista los paquetes instalados.
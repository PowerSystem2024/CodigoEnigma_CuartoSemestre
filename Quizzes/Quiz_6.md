# 📝 Respuestas del Quiz 6 - 01/10/25 # 


1. Explica en pocas palabras como agregarías personajes al juego desde el código, seguramente deberán investigar para esta respuesta o puede que la tengan, deben explicar como lo harían desde el HTML o el JS.

✅ En el HTML subido la clase anterior, agregamos un div con el ID "new-char-section" cuyo botón llama a la función crearPersonaje(). Esta función toma el nombre del input que ingresó el usuario, crea un objeto y lo agrega a la lista de personajes.

2. ¿Qué significa darle feedback al otro desarrollador? Hagan su investigación para responder.

✅ Es una manera de aportar al equipo mediante comentarios constructivos sobre el código o el trabajo de un/a colega. La finalidad sería mejorar la calidad, señalar errores o proponerle alternativas de resolución, siempre desde una mirada colaborativa y respetuosa.

3. En HTML ¿Se aplica el paradigma de la POO?
✅ e. El que HTML tenga etiquetas padre y hijas, no hace que tenga ninguna relación con POO

4. Les presento un problema a resolver:
Un estudiante estaba trabajando en GitHub, pero en su ordenador, pusheando todo lo que venía haciendo en su propia rama, este era un repositorio grupal, ya terminando su trabajo, haciendo merge hasta la rama main, se acordó que algo le faltaba, y era extenso, comenzó a avanzar, genero un commit, después de una interrupción siguió con su trabajo, pero cansado decidió terminar al siguiente día. A la mañana se vino directamente a terminar su trabajo inconcluso, abre el repositorio en su ordenador y encuentra que esta en la rama main, al tener cosas en el área de trabajo, no le permitió cambiar de rama. ¿Cuáles son las posibles soluciones que debería hacer? Haz un resumen con cada paso desde la terminal y sus comandos hacía GitHub.

✅ Opción 1: Agregar los últimos cambios trabajados y hacer un commit con el mensaje de "Avance pendiente" asi puede cambiarse a su rama y después podrá aplicar un git reset desde main para deshacer los commits que no correspondían en main:

git add .
git commit -m "Avance pendiente"
git checkout su-rama
git checkout main
git reset --hard origin/main

Opción 2: No commitear su último trabajo pero dejarlo guardado en stash asi después puede hacer un git reset en main:

git stash
git checkout nombre-de-rama
git stash pop
git reset --hard origin/main














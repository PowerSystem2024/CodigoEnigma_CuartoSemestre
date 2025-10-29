# Diseño para Developers - Clase 1

## 1. Proceso de Diseño PCREA 
![Imagen: Diagrama de flujo con 5 etapas coloridas del proceso PCREA](img/1.%20PCREA.png)

Proceso de diseño estructurado de 5 etapas usando el acrónimo "PCREA", que va desde la concepción hasta la implementación:

* **P - Preparación:** Investigar, recopilar
* **C - Incubación:** Experimentar, sintetizar  
* **R - Iluminación:** Idear, imaginar
* **E - Evaluación:** Criticar, replantear
* **A - Implementación:** Construir, trabajar

## 2. Diseño Responsivo 
![Imagen: Diagrama conceptual mostrando responsive design, mobile first y los flujos de mejora progresiva vs degradación agraciada](img/2.%20DiseñoResponsivo.png)

Metodología para crear diseños web flexibles y adaptables a diferentes dispositivos y pantallas.

### Definición y Principios Clave:
* **Definición:** Es una metodología para crear un diseño que sea adaptable entre los diferentes tamaños de pantallas
* **Principios fundamentales:**
   * **Empieza por dispositivos móviles ("Mobile First")** 
   * Separa las capas de contenido y funcionalidad
   * Usa sistemas de grillas y columnas

### Enfoques de Implementación:

#### **Mejora Progresiva** 
Es óptimo cuando empezamos un diseño porque nos garantiza un crecimiento del contenido desde lo básico a lo complejo.

Partimos de una base sólida, teniendo nuestros elementos básicos y esenciales. Pero estas pueden mejorar con capas de complejidad según las especificaciones de sistema o dispositivo del usuario.

**Flujo:** DATOS → HTML → CSS → JS  
**Proceso:** Contenido → Wireframes → Diseño Virtual → Animaciones

#### **Degradación Agraciada**
Partimos de una versión completa que le retiramos mejoras para poder migrar entre las especificaciones de sistema y dispositivo. Recomendable para cuando ya se a realizado el diseño.

## 3. Accesibilidad y Consejos de Diseño 
![Imagen: Mapa conceptual con 8 consejos de accesibilidad organizados alrededor del concepto central](img/3.%20AccesibilidadDiseño.png)

### Principio Central:
**La accesibilidad en el diseño te asegura el acceso a todas las personas sin importar alguna discapacidad esencial.**

### 8 Consejos Clave para Accesibilidad:

1. **Utiliza los encabezados de manera ordenada para organizar la estructura.** Cuando mantienes la jerarquía debe estar marcada. Para que cuando alguien navegue con el teclado obtenga la importancia dentro de info.

2. **Utiliza tamaños de fuente accesibles.** Se debe utilizar tamaños de fuentes que puedan ser vistas por cualquier persona sin importar el dispositivo. Evitar tamaños pequeños.

3. **Utiliza colores que tengan un contraste adecuado.** No todas todas las personas perciben el color de la misma forma, por ello los colores deben de diferenciarse del fondo usando de un buen contraste.

4. **Garantiza que el color no sea la única forma de relacionar con el contenido.** Debemos de tener una alternativa del aspecto del contenido como bordes para ser accesible a todos los usuarios.

5. **Diseña teniendo en cuenta los estados "Focus" y "Active" de los componentes.** Es importante porque es una guía visual de su acción.

6. **Añade etiquetas y textos descriptivos a campos de formulario.** La implementación de esto, ayuda que los usuarios tengan alguna descripción de algún error y pueda ser escuchado por lector de pantalla.

7. **Escribe contenido descriptivo que pueda reemplazar videos e imágenes.**

8. **Garantiza que las animaciones no bloqueen el acceso al contenido.** Priorizar que la funcionalidad de la página no se vea afectado por algún implemento de diseño.

## 4. Brief 
![Imagen: Ilustración de una persona trabajando con documentos y la definición del Brief](img/4.Brief.png)

El documento "Brief" sirve como la hoja de ruta fundamental para iniciar cualquier proyecto de diseño.

* **Definición:** Es la hoja de ruta para empezar a diseñar.
* **Secciones principales:**
   * Descripción de la empresa o cliente
   * Objetivos o retos
   * Target o audiencia
   * Competencia
   * Distribución

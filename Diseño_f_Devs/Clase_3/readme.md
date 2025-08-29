# Clase 3: Fundamentos de Diseño Web para Developers

## Sistemas de Layout Responsivo

### Grillas (CSS Grid)
Las grillas son un sistema de columnas que nos permite crear layouts responsivos adaptados a diferentes tamaños de dispositivo. Este sistema es fundamental para estructurar el contenido de manera ordenada y funcional.

**Características principales:**
- Sistema flexible de columnas y filas
- Adaptación automática a diferentes viewport
- Control preciso sobre el posicionamiento de elementos
- Soporte nativo en navegadores modernos

*[Espacio para imagen: Ejemplo de CSS Grid en acción]*

### Style Guide y Componentes
Un style guide es una página de muestra donde tenemos nuestros componentes y tienen sus propias hojas de CSS. Este documento sirve como referencia central para mantener la consistencia visual en todo el proyecto.

**Beneficios de usar Style Guides:**
- Consistencia visual en toda la aplicación
- Reutilización eficiente de componentes
- Facilita el mantenimiento del código
- Mejora la colaboración entre diseñadores y developers

![Espacio para imagen: Ejemplo de style guide con componentes](img/2.%20Grillas%20&%20StyleGuide.png)

## Sistemas de Temas y Personalización

### ¿Qué son los Themes?
Los themes son una capa de color y estilos que se añade por encima de nuestra aplicación y nos permite tener distintas variaciones sin hacer cambios drásticos en nuestro código. Esto lo hace altamente customizable.

### Implementación de Themes
Para tener varios themes, se crea un archivo de CSS por cada theme, pudiéndose intercambiar una por otra desde un archivo donde se configuran todos los archivos importados, sin tener que cambiar toda la programación de la aplicación. Simplemente con cambiar el nombre de un archivo por otro se realiza el cambio de theme.

![Espacio para imagen: Comparación visual de diferentes themes](img/3.%20Themes.png)

## Gestión de Imágenes y Recursos Visuales

### Tipos de Imágenes y Cuándo Usarlas

#### Imágenes Vectoriales (SVG)
- **Uso recomendado:** Iconos y animaciones
- **Ventajas:** 
  - Escalables sin pérdida de calidad
  - Editables por CSS
  - Tamaño de archivo reducido
  - Perfectas para elementos gráficos simples

#### Imágenes Rasterizadas (JPG)
- **Uso recomendado:** Fotografías e imágenes con degradado
- **Características:**
  - Menor peso de archivo
  - Ideal para imágenes complejas con muchos colores

#### Imágenes con Transparencia (PNG)
- **Uso recomendado:** Imágenes decorativas que requieren fondo transparente
- **Nota importante:** Son más pesadas que otros formatos

#### Animaciones (GIF)
- **Limitación:** No recomendadas para animaciones de larga duración por ser muy pesadas
- **Alternativas:** Considera usar CSS animations o SVG animado

![Espacio para imagen: Comparación visual de formatos SVG, JPG, PNG y GIF](img/4.%20imagenesweb.png)
![Segunda imagen correlativa](img/5.%20imagenesweb.png)

### Consejos para Optimización de Imágenes

**Tips de Diseño:**
- Elige imágenes que aporten al contenido
- Utiliza imágenes en las que tu público objetivo se vea reflejado
- Elige imágenes consistentes con tu paleta y theme

### Rendimiento y Accesibilidad

**Mejores Prácticas:**
- Evita exportar imágenes con texto incluido
- Exporta las imágenes al tamaño del contenedor
- Utiliza la función "alt text" si la imagen tiene un fin comunicativo
- Optimiza el peso de archivo sin comprometer la calidad


## Animaciones y Elementos en Movimiento

### Tipos de Animaciones Web

#### CSS Animado
- **Ideal para:** Animaciones sencillas y transiciones
- **Ventajas:** 
  - Rendimiento optimizado
  - Fácil implementación
  - Control mediante CSS

#### SVG Animado  
- **Ideal para:** Animaciones de elementos vectoriales
- **Características:**
  - Escalable y ligero
  - Perfecto para iconos animados
  - Compatible con interacciones

#### JavaScript Canvas y WebGL
- **Ideal para:** Animaciones complejas como animaciones 3D
- **Uso recomendado:** Proyectos que requieren gráficos avanzados

### Consejos para Videos y Animaciones Complejas

**Videos:**
- Indicado para filmaciones y animaciones de alta complejidad y larga duración
- Evita que una animación sea muy larga o dure más de 3 segundos
- Evita que tus animaciones se reproduzcan automáticamente

**Optimización:**
- Si tus animaciones aportan al contenido añade transcripciones
- Elige animaciones que aporten al contenido

![Espacio para imagen: Ejemplos de diferentes tipos de animaciones web](img/6.%20graficosEnMovimiento.png)

## Tipografía en el Diseño Web

### Clasificación de Fuentes

#### Serif
- **Características:** Fuente tradicional, sofisticada, confiable, práctica y formal
- **Uso recomendado:** Logos, textos de párrafos, títulos o impresos
- **Ejemplos:** Book Antigua, Courier, Garamond, Times New Roman, Palatino

#### Sans-Serif  
- **Características:** Fuente moderna, limpia, humanista, geométrica y universal
- **Uso recomendado:** Logos, textos de párrafos, títulos y títulos pequeños
- **Ejemplos:** Arial, Bauhaus, Tahoma, Verdana, Helvética

#### Script (Cursiva)
- **Características:** Fuente elegante, clásica, formal, sofisticada y estilizada
- **Uso recomendado:** Logos, títulos e invitaciones y para textos cortos
- **Ejemplos:** Lobster, Brush, Great Vibes, Edwardian

![Espacio para imagen: Ejemplos visuales de diferentes tipos de fuentes]()

### Psicología de la Tipografía

La elección tipográfica comunica mucho más que palabras. Cada tipo de fuente transmite sensaciones y emociones específicas:

#### Fuentes Serif
- **Qué transmiten:** Tradición, seriedad, respeto, institucionalidad, corporativo
- **Quién las usa:** Empresas establecidas, instituciones, medios tradicionales
- **Ejemplos de marcas:** Google, periódicos tradicionales

#### Fuentes Sans-Serif
- **Qué transmiten:** Modernidad, seguridad, alegría, neutralidad, minimalismo  
- **Quién las usa:** Empresas tecnológicas, startups, marcas modernas
- **Ejemplos de marcas:** LinkedIn, empresas de tecnología

#### Fuentes Script
- **Qué transmiten:** Elegancia, afecto, creatividad, seducción
- **Quién las usa:** Marcas de lujo, productos artesanales, eventos especiales
- **Ejemplos de marcas:** Cadillac, marcas de perfumería

#### Fuentes Modernas
- **Qué transmiten:** Tendencia, inteligente, estilo futurista, tecnológico
- **Quién las usa:** Marcas innovadoras, empresas de tecnología
- **Ejemplos de marcas:** ABSOLUT VODKA, marcas tech

#### Fuentes Decorativas
- **Qué transmiten:** Diversión, casual, única, exclusiva
- **Quién las usa:** Marcas dirigidas a público joven, entretenimiento
- **Ejemplos de marcas:** Disney, marcas de entretenimiento

![Espacio para imagen: Infografía de psicología de la tipografía](img/1.%20La%20psicología%20de%20la%20tipografía.jpg)

### Mejores Prácticas Tipográficas

**Recomendaciones generales:**
- Número mínimo de fuentes por proyecto
- Fuente estándar por el soporte
- Limitar cantidad de texto
- Legibles en diferentes tamaños
- Alto nivel de entrelineado
- Contraste adecuado
- Evitar usar animaciones intermitentes

![Espacio para imagen: Resumen visual de todos los conceptos de la clase](img/7.%20Repaso.png)
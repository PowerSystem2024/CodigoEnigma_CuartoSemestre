# Clase 1 - Configuración del Entorno de Desarrollo Node.js

## 📋 Herramientas Requeridas

Para esta clase necesitarás configurar las siguientes herramientas esenciales en tu sistema:

### 1. **Postman**
- **Propósito**: Cliente API para testing y desarrollo
- **Descargar desde**: [postman.com](https://www.postman.com/)
- **Función**: Probar endpoints, enviar requests HTTP, y documentar APIs

### 2. **MongoDB**
- **Propósito**: Base de datos NoSQL orientada a documentos
- **Descargar desde**: [mongodb.com](https://www.mongodb.com/try/download/community)
- **Función**: Almacenar datos en formato JSON-like (BSON)

### 3. **Node.js (Versión LTS)**
- **Propósito**: Runtime de JavaScript del lado del servidor
- **Descargar desde**: [nodejs.org](https://nodejs.org/)
- **⚠️ Importante**: Instalar la versión LTS (Long Term Support)
- **Verificar instalación**: `node --version` y `npm --version`

### 4. **Visual Studio Code**
- **Propósito**: Editor de código principal
- **Descargar desde**: [code.visualstudio.com](https://code.visualstudio.com/)

#### Extensiones Requeridas para VS Code:
1. **Activitus Bar** (by Gruntfuggly)
   - Personaliza la barra de actividades lateral
2. **Monokai Night Theme**
   - Tema oscuro optimizado para programación
3. **Material Icon Theme**
   - Iconos mejorados para archivos y carpetas
4. **TypeScript Importer**
   - Auto-importación inteligente de módulos

---

## 🚀 ¿Qué es Node.js?

**Node.js** es un entorno de ejecución (runtime) de JavaScript construido sobre el motor V8 de Google Chrome que permite ejecutar JavaScript del lado del servidor.

### Funcionalidades Principales

- **Ejecución server-side**: Ejecuta JavaScript fuera del navegador
- **Event-driven**: Arquitectura basada en eventos no bloqueantes
- **Asíncrono**: Manejo eficiente de operaciones I/O
- **Multiplataforma**: Funciona en Windows, macOS y Linux

### Beneficios con JavaScript

1. **Unificación del lenguaje**: Un solo lenguaje para frontend y backend
2. **Reutilización de código**: Compartir librerías entre cliente y servidor
3. **Desarrollo ágil**: Los desarrolladores frontend pueden trabajar en backend
4. **JSON nativo**: Manejo natural de datos JSON
5. **Ecosistema robusto**: Acceso a miles de paquetes via NPM

### Librerías Populares

- **Express.js**: Framework web minimalista y flexible
- **Socket.io**: Comunicación en tiempo real
- **Mongoose**: ODM para MongoDB
- **Lodash**: Utilidades para manipulación de datos
- **Axios**: Cliente HTTP para APIs
- **Jest**: Framework de testing
- **Nodemon**: Herramienta de desarrollo que reinicia automáticamente

### ¿Por qué Node.js es tan Popular?

1. **Performance**: Motor V8 altamente optimizado
2. **Escalabilidad**: Manejo eficiente de múltiples conexiones concurrentes
3. **Productividad**: Desarrollo rápido con JavaScript en todas las capas
4. **Comunidad activa**: Gran ecosistema de desarrolladores
5. **Empresarial**: Adoptado por grandes corporaciones
6. **Microservicios**: Ideal para arquitecturas distribuidas

### Grandes Clientes que Utilizan Node.js

- **Netflix**: Streaming y microservicios
- **PayPal**: Procesamiento de pagos
- **Uber**: Backend de aplicaciones móviles
- **WhatsApp**: Mensajería en tiempo real
- **LinkedIn**: Red social profesional
- **NASA**: Sistemas críticos de misiones espaciales
- **Airbnb**: Plataforma de alojamiento
- **Twitter**: Partes de su infraestructura backend

---

## 🔍 Conceptos Fundamentales

### ¿Node.js es un Runtime de JavaScript?

**Sí**, Node.js es efectivamente un **runtime environment** (entorno de ejecución) de JavaScript. Esto significa:

- Proporciona el entorno necesario para ejecutar código JavaScript
- Incluye el motor V8 de Google para interpretar y ejecutar JS
- Añade APIs adicionales para interactuar con el sistema operativo
- Permite ejecutar JavaScript sin necesidad de un navegador web

### ¿Qué es NPM?

**NPM** (Node Package Manager) es el gestor de paquetes oficial de Node.js:

#### Funciones Principales:
- **Instalación de paquetes**: Gestiona dependencias del proyecto
- **Versionado**: Controla versiones de librerías
- **Scripts**: Automatiza tareas de desarrollo
- **Distribución**: Publica y comparte código con la comunidad
- **Repositorio**: Acceso a más de 1.3 millones de paquetes

#### Comandos Básicos:
```bash
npm init          # Inicializa un nuevo proyecto
npm install       # Instala todas las dependencias
npm install <pkg> # Instala un paquete específico
npm run <script>  # Ejecuta un script definido
npm update        # Actualiza paquetes
```

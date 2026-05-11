# Flujo de trabajo con Cursor

En este documento se explica el uso de Cursor como IDE asistido por inteligencia artificial dentro del desarrollo del proyecto TaskFlow.

Se realizaron pruebas utilizando las herramientas integradas de IA para generación de código, explicación de funciones, refactorización y asistencia durante el desarrollo.

---

# Instalación de Cursor

Se descargó e instaló Cursor desde su página oficial. Posteriormente se abrió el proyecto TaskFlow utilizando la opción "Open Folder".

Cursor permitió trabajar sobre el mismo proyecto que se desarrolló previamente en Visual Studio Code.

---

# Exploración de la interfaz

Se exploraron las principales herramientas de Cursor:

- Explorador de archivos
- Terminal integrada
- Chat con IA
- Edición inline
- Generación automática de código

La interfaz resultó muy similar a VS Code, por lo que fue fácil adaptarse rápidamente.

---

# Pruebas realizadas

## Autocompletado con IA

Se probaron sugerencias automáticas escribiendo comentarios descriptivos dentro de archivos JavaScript.

Ejemplo:

```js
// function to sort tasks by priority

# Uso de MCP en Cursor

## ¿Qué es MCP?

MCP significa Model Context Protocol. Es un protocolo que permite que herramientas de IA como Cursor puedan conectarse a recursos externos, como archivos del proyecto, repositorios de GitHub, bases de datos o servicios externos.

## Configuración realizada

Se creó una carpeta `.cursor` dentro del proyecto y dentro de ella un archivo `mcp.json`.

La estructura creada fue:

```text
.cursor/mcp.json
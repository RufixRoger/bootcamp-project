# TaskFlow

## Descripción

TaskFlow es una aplicación web desarrollada con HTML, CSS y JavaScript puro para la gestión de tareas de forma dinámica y responsive.

La aplicación permite crear, editar, completar, eliminar, buscar y filtrar tareas. También incluye un sistema de prioridades, estadísticas automáticas y persistencia de datos mediante LocalStorage.

---

## Demo

https://bootcamp-project-liart.vercel.app

---

## Funcionalidades

- Crear nuevas tareas
- Editar tareas existentes
- Eliminar tareas
- Marcar tareas como completadas
- Filtrar tareas por estado
- Buscar tareas por texto
- Asignar prioridad alta, media o baja
- Marcar todas las tareas como completadas
- Borrar tareas completadas
- Guardar datos en LocalStorage
- Mostrar estadísticas de tareas
- Diseño responsive para móvil y escritorio

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git
- GitHub
- Vercel
- Cursor
- ChatGPT

---

## Estructura del proyecto

```text
bootcamp-project/
│
├── index.html
├── style.css
├── app.js
├── README.md
│
└── docs/
    ├── design/
    └── ai/
        ├── ai-comparison.md
        ├── cursor-workflow.md
        ├── prompt-engineering.md
        ├── experiments.md
        └── reflection.md
```

---

## Instalación y uso

1. Clonar el repositorio:

```bash
git clone https://github.com/RufixRoger/bootcamp-project.git
```

2. Entrar en la carpeta:

```bash
cd bootcamp-project
```

3. Abrir index.html en el navegador o usar Live Server.

---

## Arquitectura

El proyecto se divide en tres partes principales:

### HTML

Define la estructura semántica de la aplicación.

### CSS

Gestiona el diseño visual, el responsive design, los botones y las tarjetas.

### JavaScript

Controla la lógica principal de la aplicación:

- creación de tareas
- renderizado dinámico
- edición y eliminación
- filtros
- búsqueda
- estadísticas
- persistencia en LocalStorage

---

## Persistencia de datos

TaskFlow utiliza LocalStorage para guardar las tareas en el navegador.

Los datos se almacenan en formato JSON y se recuperan automáticamente al recargar la página.

---

## Uso de inteligencia artificial

Durante la segunda fase del proyecto se utilizaron herramientas de inteligencia artificial para:

- comparar asistentes como ChatGPT y Claude
- probar Cursor como IDE asistido por IA
- documentar prompts útiles
- refactorizar funciones
- añadir comentarios JSDoc
- mejorar la documentación
- analizar posibles mejoras del proyecto

La documentación de esta fase se encuentra en la carpeta:

```text
docs/ai
```

---

## Testing manual

Se realizaron pruebas manuales sobre la aplicación:

- Añadir una tarea válida
- Intentar añadir una tarea vacía
- Intentar añadir una tarea demasiado corta
- Editar una tarea existente
- Eliminar tareas
- Marcar tareas como completadas
- Filtrar tareas
- Buscar tareas por texto
- Comprobar persistencia al recargar la página
- Probar la interfaz en móvil y escritorio

---

## Despliegue

La aplicación está desplegada en Vercel.

URL:

https://bootcamp-project-liart.vercel.app

---

## Autor

Roger Sánchez

Proyecto desarrollado como parte de prácticas profesionales de Desarrollo de Aplicaciones Web (DAW).
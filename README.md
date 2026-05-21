# TaskFlow

## Descripción

TaskFlow es una aplicación web desarrollada con HTML, CSS y JavaScript puro que permite gestionar tareas de manera eficiente mediante una interfaz responsive y amigable para el usuario.

La aplicación implementa operaciones CRUD (Create, Read, Update y Delete) sobre tareas, permitiendo crear, editar, completar y eliminar elementos de forma dinámica. Además, incorpora persistencia de datos mediante LocalStorage, garantizando que la información permanezca disponible incluso después de cerrar o recargar el navegador.

---

## Características principales

- Creación de tareas dinámicas
- Edición de tareas existentes
- Eliminación individual de tareas
- Marcado de tareas como completadas
- Sistema de prioridades (Alta, Media y Baja)
- Búsqueda de tareas por texto
- Filtros por estado (Todas, Pendientes y Completadas)
- Marcado masivo de tareas completadas
- Eliminación masiva de tareas completadas
- Persistencia de datos mediante LocalStorage
- Actualización automática de estadísticas
- Diseño responsive para dispositivos móviles y escritorio

---

## Tecnologías utilizadas

### Frontend

- HTML5 semántico
- CSS3
- JavaScript ES6+

### Persistencia de datos

- LocalStorage

### Control de versiones

- Git
- GitHub

### Despliegue

- Vercel
- https://bootcamp-project-liart.vercel.app

## Arquitectura de la aplicación

La aplicación está estructurada en tres capas principales:

### Presentación

Responsable de la interfaz de usuario mediante HTML y CSS.

### Lógica de negocio

Implementada en JavaScript para gestionar tareas, filtros, estadísticas y validaciones.

### Persistencia

Gestionada mediante LocalStorage utilizando serialización JSON.

---

## Estructura del proyecto

```text
bootcamp-project/
│
├── index.html
├── style.css
├── app.js
│
├── docs/
│   ├── design/
│   └── ai/
│
└── README.md
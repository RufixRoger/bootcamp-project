let tasks = [];

/**
 * Obtener todas las tareas
 */
function obtenerTodas() {
  return tasks;
}

/**
 * Crear tarea
 */
function crearTarea(data) {
  const nuevaTarea = {
    id: Date.now(),
    titulo: data.titulo,
    prioridad: data.prioridad,
    completada: false,
  };

  tasks.push(nuevaTarea);

  return nuevaTarea;
}

/**
 * Eliminar tarea
 */
function eliminarTarea(id) {
  const indice = tasks.findIndex((task) => task.id === Number(id));

  if (indice === -1) {
    throw new Error("NOT_FOUND");
  }

  tasks.splice(indice, 1);
}

module.exports = {
  obtenerTodas,
  crearTarea,
  eliminarTarea,
};
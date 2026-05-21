const taskService = require("../services/task.service");

function getTasks(req, res) {
  const tasks = taskService.obtenerTodas();

  res.status(200).json(tasks);
}

function createTask(req, res) {
  const { titulo, prioridad } = req.body;

  if (!titulo || typeof titulo !== "string" || titulo.trim().length < 3) {
    return res.status(400).json({
      error: "El título es obligatorio y debe tener al menos 3 caracteres.",
    });
  }

  const nuevaTarea = taskService.crearTarea({
    titulo,
    prioridad,
  });

  res.status(201).json(nuevaTarea);
}

function deleteTask(req, res, next) {
  try {
    taskService.eliminarTarea(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
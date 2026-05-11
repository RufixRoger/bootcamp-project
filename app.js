let tasks = [];
let currentFilter = "all";
let currentSearch = "";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-input");
const taskList = document.getElementById("task-list");

const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");
const pendingTasks = document.getElementById("pending-tasks");

const filterAllBtn = document.getElementById("filter-all");
const filterPendingBtn = document.getElementById("filter-pending");
const filterCompletedBtn = document.getElementById("filter-completed");

const searchInput = document.getElementById("search-input");
const completeAllBtn = document.getElementById("complete-all-btn");
const clearCompletedBtn = document.getElementById("clear-completed-btn");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskTitle = taskInput.value.trim();

  if (taskTitle === "") {
    alert("Por favor, escribe una tarea");
    return;
  }

  if (taskTitle.length < 3) {
    alert("La tarea debe tener al menos 3 caracteres");
    return;
  }

  if (taskTitle.length > 100) {
    alert("La tarea no puede superar los 100 caracteres");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    priority: priorityInput.value,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  updateStats();

  taskInput.value = "";
  priorityInput.value = "medium";
});

/**
 * Renderiza todas las tareas según el filtro y la búsqueda actual.
 */
function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks;

  if (currentFilter === "pending") {
    filteredTasks = filteredTasks.filter(function (task) {
      return !task.completed;
    });
  }

  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter(function (task) {
      return task.completed;
    });
  }

  if (currentSearch !== "") {
    filteredTasks = filteredTasks.filter(function (task) {
      return task.title.toLowerCase().includes(currentSearch.toLowerCase());
    });
  }

  filteredTasks.forEach(function (task) {
    renderTask(task);
  });
}

/**
 * Renderiza una tarea individual dentro de la lista.
 * @param {Object} task - Objeto que representa una tarea.
 * @param {number} task.id - Identificador único de la tarea.
 * @param {string} task.title - Título de la tarea.
 * @param {string} task.priority - Prioridad de la tarea.
 * @param {boolean} task.completed - Estado de la tarea.
 * @param {string} task.createdAt - Fecha de creación.
 */
function renderTask(task) {
  const taskItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task.title;

  if (task.completed) {
    taskText.classList.add("completed");
  }

  const priorityBadge = document.createElement("strong");

  if (task.priority === "high") {
    priorityBadge.textContent = "Alta";
    priorityBadge.className = "priority high";
  } else if (task.priority === "medium") {
    priorityBadge.textContent = "Media";
    priorityBadge.className = "priority medium";
  } else {
    priorityBadge.textContent = "Baja";
    priorityBadge.className = "priority low";
  }

  const actions = document.createElement("div");
  actions.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.type = "button";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.type = "button";
  deleteBtn.setAttribute("aria-label", "Eliminar tarea");

  taskText.addEventListener("click", function () {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
    updateStats();
  });

  editBtn.addEventListener("click", function () {
    const newTitle = prompt("Editar tarea:", task.title);

    if (newTitle === null) {
      return;
    }

    const cleanTitle = newTitle.trim();

    if (cleanTitle === "") {
      alert("El título no puede estar vacío");
      return;
    }

    if (cleanTitle.length < 3) {
      alert("La tarea debe tener al menos 3 caracteres");
      return;
    }

    if (cleanTitle.length > 100) {
      alert("La tarea no puede superar los 100 caracteres");
      return;
    }

    task.title = cleanTitle;
    saveTasks();
    renderTasks();
  });

  deleteBtn.addEventListener("click", function () {
    tasks = tasks.filter(function (savedTask) {
      return savedTask.id !== task.id;
    });

    saveTasks();
    renderTasks();
    updateStats();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  taskItem.appendChild(taskText);
  taskItem.appendChild(priorityBadge);
  taskItem.appendChild(actions);

  taskList.appendChild(taskItem);
}

/**
 * Actualiza las estadísticas de tareas.
 */
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(function (task) {
    return task.completed;
  }).length;

  const pending = total - completed;

  totalTasks.textContent = total;
  completedTasks.textContent = completed;
  pendingTasks.textContent = pending;
}

/**
 * Guarda las tareas en LocalStorage.
 */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Carga las tareas guardadas desde LocalStorage.
 */
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }

  tasks = tasks.map(function (task) {
    return {
      ...task,
      priority: task.priority || "medium",
    };
  });

  renderTasks();
  updateStats();
}

filterAllBtn.addEventListener("click", function () {
  currentFilter = "all";
  renderTasks();
});

filterPendingBtn.addEventListener("click", function () {
  currentFilter = "pending";
  renderTasks();
});

filterCompletedBtn.addEventListener("click", function () {
  currentFilter = "completed";
  renderTasks();
});

searchInput.addEventListener("input", function () {
  currentSearch = searchInput.value.trim();
  renderTasks();
});

completeAllBtn.addEventListener("click", function () {
  tasks.forEach(function (task) {
    task.completed = true;
  });

  saveTasks();
  renderTasks();
  updateStats();
});

clearCompletedBtn.addEventListener("click", function () {
  tasks = tasks.filter(function (task) {
    return !task.completed;
  });

  saveTasks();
  renderTasks();
  updateStats();
});

loadTasks();
let tasks = [];
let currentFilter = "all";
let currentSearch = "";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
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

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  updateStats();

  taskInput.value = "";
});

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

function renderTask(task) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task.title;

  if (task.completed) {
    span.classList.add("completed");
  }

  const actions = document.createElement("div");
  actions.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.type = "button";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.type = "button";

  span.addEventListener("click", function () {
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

    task.title = cleanTitle;
    saveTasks();
    renderTasks();
  });

  deleteBtn.addEventListener("click", function () {
    tasks = tasks.filter(function (t) {
      return t.id !== task.id;
    });

    saveTasks();
    renderTasks();
    updateStats();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
}

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

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }

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
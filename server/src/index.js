const express = require("express");
const cors = require("cors");

const { PORT } = require("./config/env");

const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

/**
 * Middleware global de errores
 */
app.use((err, req, res, next) => {
  console.error(err);

  if (err.message === "NOT_FOUND") {
    return res.status(404).json({
      error: "Tarea no encontrada",
    });
  }

  res.status(500).json({
    error: "Error interno del servidor",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
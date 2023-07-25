const express = require("express");
const router = express.Router();

const tasksController = require("./controllers/taskController");
const taskMiddlewares = require("./middlewares/tasksMiddlewares");

router.get("/tasks", tasksController.getAll);
router.post("/tasks", taskMiddlewares.validateFielTitle, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", taskMiddlewares.validateFielStatus, taskMiddlewares.validateFielTitle,tasksController.updateTask);

module.exports = router;

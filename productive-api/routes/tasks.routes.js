const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks.controllers");

//Route for getting all tasks and creating a new one
router
  .route("/")
  .get(tasksController.getTasks)      // READ all tasks
  .post(tasksController.postTask);    // CREATE new task

//Route for getting, updating, and deleting a single task by ID
router
  .route("/:id")
  .get(tasksController.getTaskById)   // READ one task by ID
  .put(tasksController.updateTask)    // UPDATE a task by ID
  .delete(tasksController.deleteTask) // DELETE a task by ID
  .patch(tasksController.patchTask);  // PARTIAL UPDATE a task by ID

module.exports = router;

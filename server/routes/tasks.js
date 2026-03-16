const express = require("express");
const router = express.Router();
let tasks = [];
router.get("/", (req, res) => {
    
    res.json(tasks);
  }),


router.post("/",  (req, res) => {
  const newTask = {
    id: date.now(),
    title: req.body.title,
    completed: false,
  };

  tasks.push(newTask);
  res.json(newTask);
}),
router.put("/:id",  (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    res.json(tasks);
  })
module.exports = router; 

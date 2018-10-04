const express = require("express");
const router = express.Router();
const Task = require("../../models/Taskmodel");

/*
    @route = GET api/tasks
    @desc to get all tasks 
    this route has a public access 
*/
router.get("/", (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then(tasks => {
      res.json(tasks);
    });
});
// end of GET route

/*
    @route = POST api/items
    @description to post tasks 
    this route can have private/public access 
*/
router.post("/", (req, res) => {
  const newTask = new Task({
    name: req.body.name
  });

  //save the task
  newTask.save().then(task => {
    res.json(task);
  });
});
// end of POST route

/*
    @route = delete api/tasks/:id
    @description to delete tasks 
    this route can have private/public access 
*/
router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      task.remove().then(() => {
        res.json({ success: true });
      });
    })
    .catch(err => {
      res.status(404).json({ success: true });
    });
});
// end of delete route

module.exports = router;

const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");


// ✅ CREATE User + Task
router.post("/create", async (req, res) => {
  try {
    const { name, email, title, description } = req.body;

    const user = await User.create({ name, email });

    const task = await Task.create({
      title,
      description,
      userId: user._id,
    });

    res.json({
      message: "User & Task created",
      user,
      task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ GET All Tasks 
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ GET Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

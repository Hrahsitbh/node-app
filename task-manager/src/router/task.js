const express = require("express");
const router = express.Router();

const Tasks = require("../models/tasks");

router.get("/tasks", async (_, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch {
    res.status(500).send();
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) return res.status(404).send();
    res.send(task);
  } catch {
    res.status(500).send();
  }
});

router.post("/tasks", async (req, res) => {
  const tasks = new Tasks(req.body);
  try {
    await tasks.save();
    res.send(tasks);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/tasks/:id", async (req, res) => {
  const updateParams = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updateParams.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) res.status(400).send({ error: "Invalid Task Update" });
  try {
    const task = await Tasks.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const user = await Tasks.findOneAndDelete({
      _id: req.params.id,
    });
    if (!user) res, status(404).send();
    res.send(user);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;

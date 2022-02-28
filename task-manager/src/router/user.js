const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/user");

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const jwtToken = await user.generateAuthToken();
    res.send({ user, jwtToken });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const jwtToken = await user.generateAuthToken();
    res.send({ user, jwtToken });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/me", auth, async (req, res) => {
  // try {
  //   const users = await User.find({});
  //   res.send(users);
  // } catch {
  //   res.status(500).send();
  // }
  res.send(req.user);
});

router.post("/users/logout", auth, (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/logoutAll", auth, (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch {
    res.status(500).send();
  }
});

router.post("/users/:id", async (req, res) => {
  const updateParams = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "email", "password"];
  const isValidOperation = updateParams.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) res.status(400).send({ error: "Invalid Update" });
  try {
    const user = await User.findOne({ _id: req.params.id });
    updateParams.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({
      _id: req.params.id,
    });
    if (!user) res, status(404).send();
    res.send(user);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;

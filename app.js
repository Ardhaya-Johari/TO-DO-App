import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


const taskSchema = new mongoose.Schema({
  content: String,
  completed: Boolean
});

const Task = mongoose.model("Task", taskSchema);

app.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render("index", { tasks: tasks, title: "My To-Do List" });
  } catch (err) {
    res.status(500).send("Error loading tasks.");
  }
});

app.post("/add", async (req, res) => {
  const newTask = new Task({
    content: req.body.task,
    completed: false
  });
  try {
    await newTask.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Failed to add task.");
  }
});

app.post("/complete/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    await Task.findByIdAndUpdate(taskId, { completed: true });
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Failed to mark task as complete.");
  }
});

app.post("/delete/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    await Task.findByIdAndDelete(taskId);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Failed to delete task.");
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at port ${port}`);
});

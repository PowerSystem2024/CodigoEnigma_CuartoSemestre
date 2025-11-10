import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/displayTasks.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);

displayTasks();
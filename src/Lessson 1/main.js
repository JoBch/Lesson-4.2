import { getAllTODOs, addNewTask } from "./modules/todoAPI.js";
import { displayTodos } from "./modules/display.js";

const resultContainer = document.getElementById("resultContainer")
const formEl = document.getElementById("formEl");

getAllTODOs().then(displayTodos);

formEl.addEventListener("submit", event => {
    event.preventDefault();

    const newTask = formEl.querySelector("input").value;
    addNewTask(newTask)
        .then(getAllTODOs)
        .then(displayTodos);
})

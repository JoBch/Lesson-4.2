import { deleteTask, getAllTODOs, patchTask } from "./todoAPI.js";

export function displayTodos(todos) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = '';

    for (const key in todos) {
        const taskContainer = document.createElement("div");
        const taskEl = document.createElement("span");
        taskEl.id = key;
        taskEl.innerText = todos[key].task;

        if (todos[key].done) {
            taskEl.classList.add("done");
            const btnEl = document.createElement("button");
            btnEl.textContent = "X"
            taskContainer.append(btnEl)

            btnEl.addEventListener("click", event => {
                deleteTask(key)
                    .then(getAllTODOs)
                    .then(displayTodos);
            })
        }

        taskEl.addEventListener("click", event => {
            
            console.log(key, todos[key].done)
            patchTask(key, !todos[key].done)
                .then(getAllTODOs)
                .then(displayTodos)
        })
        taskContainer.prepend(taskEl)
        resultContainer.prepend(taskContainer);
    }
}
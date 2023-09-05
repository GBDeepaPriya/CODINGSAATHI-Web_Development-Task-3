const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const pendingTasksList = document.getElementById("pendingTasks");
const completedTasksList = document.getElementById("completedTasks");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="completeButton">Complete</button>
    <button class="deleteButton">Delete</button>
  `;



    const completeButton = taskItem.querySelector(".completeButton");
    const deleteButton = taskItem.querySelector(".deleteButton");

    completeButton.addEventListener("click", completeTask);
    deleteButton.addEventListener("click", deleteTask);

    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
}

function completeTask(event) {
    const taskItem = event.target.parentElement;
    //taskItem.classList.add("completed");
    completedTasksList.appendChild(taskItem);
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}
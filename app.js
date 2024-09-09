// let taskList = [];

// document.addEventListener("DOMContentLoaded", function() {
//     const taskInput = document.getElementById("task-input");
//     const addTaskBtn = document.getElementById("add-task-btn");
//     const taskListElement = document.getElementById("task-list");

//     addTaskBtn.addEventListener("click", function() {
//         const task = taskInput.value.trim();
//         if (task) {
//             taskList.push({ text: task, completed: false });
//             taskInput.value = "";
//             renderTaskList();
//         }
//     });

//     taskListElement.addEventListener("click", function(event) {
//         if (event.target.tagName === "LI") {
//             const taskIndex = event.target.dataset.index;
//             taskList[taskIndex].completed = !taskList[taskIndex].completed;
//             renderTaskList();
//         }
//     });

//     function renderTaskList() {
//         taskListElement.innerHTML = "";
//         taskList.forEach((task, index) => {
//             const taskElement = document.createElement("LI");
//             taskElement.textContent = task.text;
//             taskElement.dataset.index = index;
//             if (task.completed) {
//                 taskElement.classList.add("completed");
//             }
//             taskListElement.appendChild(taskElement);
//         });
//     }
// });
// task2let taskList = [];

// document.addEventListener("DOMContentLoaded", function() {
//     const taskInput = document.getElementById("task-input");
//     const addTaskBtn = document.getElementById("add-task-btn");
//     const taskListElement = document.getElementById("task-list");

//     addTaskBtn.addEventListener("click", function() {
//         const task = taskInput.value.trim();
//         if (task) {
//             taskList.push({ text: task, completed: false });
//             taskInput.value = "";
//             renderTaskList();
//         }
//     });

//     taskListElement.addEventListener("click", function(event) {
//         if (event.target.tagName === "LI") {
//             const taskIndex = event.target.dataset.index;
//             taskList[taskIndex].completed = !taskList[taskIndex].completed;
//             renderTaskList();
//         } else if (event.target.classList.contains("task-delete")) {
//             const taskIndex = event.target.parentNode.dataset.index;
//             taskList.splice(taskIndex, 1);
//             renderTaskList();
//         }
//     });

//     function renderTaskList() {
//         taskListElement.innerHTML = "";
//         taskList.forEach((task, index) => {
//             const taskElement = document.createElement("LI");
//             taskElement.dataset.index = index;
//             const taskCheckbox = document.createElement("INPUT");
//             taskCheckbox.type = "checkbox";
//             taskCheckbox.className = "task-checkbox";
//             taskElement.appendChild(taskCheckbox);
//             const taskText = document.createElement("SPAN");
//             taskText.className = "task-text";
//             taskText.textContent = task.text;
//             taskElement.appendChild(taskText);
//             const taskDelete = document.createElement("SPAN");
//             taskDelete.className = "task-delete";
//             taskDelete.textContent = "×";
//             taskElement.appendChild(taskDelete);
//             if (task.completed) {
//                 taskElement.classList.add("completed");
//             }
//             taskListElement.appendChild(taskElement);
//         });
//     }
// });     const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">X</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}
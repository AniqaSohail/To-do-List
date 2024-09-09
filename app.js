
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

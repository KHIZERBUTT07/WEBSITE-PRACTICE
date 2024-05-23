function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function() {
        var newText = prompt("Edit task:", taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    };
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    deleteBtn.style.backgroundColor = "red";
    editBtn.style.backgroundColor = "purple";

    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
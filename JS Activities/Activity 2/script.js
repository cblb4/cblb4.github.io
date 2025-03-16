const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        updateTaskList();
        taskInput.value = '';
    }
}

function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

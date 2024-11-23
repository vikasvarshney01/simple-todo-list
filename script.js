// Selectors
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event Listener for Adding a Task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    addTask(taskText);
    taskInput.value = '';
});

// Add Task Function
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button onclick="toggleComplete(this)">✔</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;
    taskList.appendChild(li);
}

// Toggle Task Completion
function toggleComplete(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
}

// Delete Task
function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

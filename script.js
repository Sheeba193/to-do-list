const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const todosList = document.getElementById('todos-list');
const itemsLeft = document.getElementById('items-left');
const clearCompletedBtn = document.getElementById('clear-completed');
const emptyState = document.querySelector('.empty-state');
const dateElement = document.getElementById('date');
const filters = document.querySelectorAll('.filter');

//create variable to store tasks
let todos = [];
let currentFilter = 'all';

addTaskBtn.addEventListener('click', () => {
    addTodo(taskBtn.value);
});

// Add task on pressing Enter key
taskInput.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') {
        addTodo(taskInput.value);
        taskInput.value = '';
    }
});

  
clearCompletedBtn.addEventListener('click', () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        currentFilter = filter.dataset.filter;
        renderTodos();
    });
});


// Function to add a new todo
function addTodo(task) {
    if (task.trim() === '') return;

    const newTodo = {
        id: Date.now(),
        task: task,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

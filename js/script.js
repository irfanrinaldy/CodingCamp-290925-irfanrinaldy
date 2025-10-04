let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (validateInput(todoInput.value, todoDate.value)) {
        let todo = { task: todoInput.value, date: todoDate.value };
        todos.push(todo);
        console.log(todos);
        displayTodos();
    }
}

function displayTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li class="bg-gray-200 rounded p-2 mb-2">
                <p><strong>Task:</strong> ${todo.task}</p>
                <p><strong>Due Date:</strong> ${todo.date}</p>
                <button onclick="deleteTodo(${index})" class="bg-red-400 hover:bg-red-600 text-white p-1 rounded">Delete</button>
            </li>
        `;
    });
}

function validateInput(task, date) {
    if (task.trim() === '' || date.trim() === '') {
        alert('Please enter both task and due date.');
        return false;
    }
    return true;
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

function deleteAllTodos() {
    todos = [];
    displayTodos();
}

function filterTodos() {
    const todoList = document.getElementById('todo-list');
    const filterDate = prompt('Enter date to filter (YYYY-MM-DD):');
    if (!filterDate) return;

    const filteredTodos = todos.filter(todo => todo.date === filterDate);
    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        let listItem = document.createElement('li');
        listItem.className = 'bg-gray-200 rounded p-2 mb-2';
        listItem.innerHTML = `<p class="text-center">No tasks found for ${filterDate}</p>`;
        todoList.appendChild(listItem);
        return;
    }

    filteredTodos.forEach((todo, index) => {
        let listItem = document.createElement('li');
        listItem.className = 'bg-gray-200 rounded p-2 mb-2';
        listItem.innerHTML = `
            <p><strong>Task:</strong> ${todo.task}</p>
            <p><strong>Due Date:</strong> ${todo.date}</p>
            <button onclick="deleteTodo(${index})" class="bg-red-400 hover:bg-red-600 text-white p-1 rounded">Delete</button>
        `;
        todoList.appendChild(listItem);
    });
}
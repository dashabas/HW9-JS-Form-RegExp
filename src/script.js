const wrapper = document.querySelector('.wrapper');
const taskInput = document.querySelector('#task_input');
const taskList = document.querySelector('.list');


function addTask() {
    let liTask = document.createElement('li');
    liTask.dataset.action = 'change-task-status';
    if (!regExp.test(taskInput.value)) {
       liTask = '';
    } else {
        liTask.innerHTML = `${taskInput.value} <button class="btn_delete" data-action="delete-task">Удалить</button>`;
    }
    taskInput.value = '';
    taskList.append(liTask);
}

function changeTaskStatus(element) {
    element.classList.toggle('done_task');
}

function deleteTask(element) {
    if (element.classList.contains('btn_delete')) {
        element.closest('li').remove();
    }
}

wrapper.addEventListener('click', (event) => {
    let action = event.target.dataset.action;
    let item = event.target;
    switch (action) {
        case 'add-task':
            addTask();
            break;
        case 'change-task-status':
            changeTaskStatus(item)
            break;
        case 'delete-task':
            deleteTask(item);
            break;
    }
});

const taskForm = document.querySelector('#task_form');
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

let error = document.querySelector('.out');
let regExp = /^[a-zA-Z0-9]{2,25}$/;

function validate() {
    if (!regExp.test(taskInput.value)) {
        taskInput.classList.add('invalid');
        error.innerHTML = 'Error';
    }
    else {
        taskInput.classList.remove('invalid');
        error.innerHTML = '';
    }
}
taskInput.addEventListener('input', () => {
    validate();
});


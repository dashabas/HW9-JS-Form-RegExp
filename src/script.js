const wrapperTaskList = document.querySelector('.wrapper');
const taskInput = document.querySelector('#task_input');
const taskList = document.querySelector('.list');

function addTask() {
    if (regExp.test(taskInput.value)) {
        let taskLi = document.createElement('li');
        taskLi.dataset.action = 'change-task-status';
        taskLi.innerHTML = `${taskInput.value} <button class="btn_delete" data-action="delete-task">Удалить</button>`;
        taskInput.value = '';
        taskList.append(taskLi);
    }
}

function changeTaskStatus(element) {
    element.classList.toggle('done_task');
}

function deleteTask(element) {
    if (element.classList.contains('btn_delete')) {
        element.closest('li').remove();
    }
}

wrapperTaskList.addEventListener('click', (event) => {
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

let errorMessage = document.querySelector('.out');
let regExp = /^[a-zA-Z0-9]{2,25}$/;

function validate() {
    if (!regExp.test(taskInput.value)) {
        taskInput.classList.add('invalid');
        errorMessage.innerHTML = 'Error';
    }
    else {
        taskInput.classList.remove('invalid');
        errorMessage.innerHTML = '';
    }
}

taskInput.addEventListener('input', () => {
    validate();
});

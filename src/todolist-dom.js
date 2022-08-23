import './todolist.css';
import {Task} from './todolist';
import {domItem} from './task-dom';
import {removeList} from './index';

const createButton = (type, content) => {
  const button = document.createElement('button');
  button.className = 'btn ' + type;
  const buttonContent = document.createElement('h2');
  buttonContent.textContent = content;
  button.appendChild(buttonContent);

  return button;
};

const createForm = (list, taskListDiv) => {
  const form = document.createElement('form');

  const nameDiv = document.createElement('div');
  nameDiv.className = 'form-group camp';
  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const nameInput = document.createElement('input');
  nameInput.className = 'form-control';
  nameInput.required = true;
  nameDiv.append(nameLabel, nameInput);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'form-group camp';
  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Description';
  const descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'form-control';
  descriptionDiv.append(descriptionLabel, descriptionInput);

  const buttons = document.createElement('div');
  buttons.className = 'item';
  buttons.style.height = '10%';
  const addTask = document.createElement('button');
  addTask.className = 'btn btn-primary';
  addTask.innerText = 'Add';
  addTask.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameInput.value === '') {
      nameInput.style.border = '1px solid red';
      return;
    }

    const item = new Task(nameInput.value, descriptionInput.value, false);
    list.addItem(item);
    const itemDiv = domItem(list, item);
    taskListDiv.append(itemDiv);
    taskListDiv.removeChild(input);

    // updating the storage
    localStorage.removeItem(list.getTitle());
    const tasksInJSON = JSON.stringify(list.getTasks());
    localStorage[list.getTitle()] = tasksInJSON;
  });

  const cancel = document.createElement('button');
  cancel.className = 'btn btn-danger';
  cancel.innerText = 'X';
  cancel.type = 'button';
  cancel.addEventListener('click', () => {
    taskListDiv.removeChild(input);
  });

  buttons.append(addTask, cancel);
  form.append(nameDiv, descriptionDiv, buttons);
  return form;
};

const domList = (list) => {
  const card = document.createElement('div');
  card.className = 'card todolist';

  const div = document.createElement('div');
  div.className = 'card-header item header';

  const title = document.createElement('h1');
  title.innerText = list.getTitle();
  div.appendChild(title);

  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  const button = createButton('btn-outline-light', '+');

  const delButton = createButton('btn-danger', 'DELETE');
  delButton.addEventListener('click', () => {
    removeList(list.getTitle());
  });

  buttons.append(delButton, button);
  div.append(buttons);
  card.appendChild(div);

  const taskList = list.getTasks();
  const taskListDiv = document.createElement('ul');
  taskListDiv.className = 'list-group';
  for (let i = 0; i < taskList.length; ++i) {
    const currTask = domItem(list, taskList[i]);
    taskListDiv.appendChild(currTask);
  }
  card.appendChild(taskListDiv);

  button.addEventListener('click', () => {
    // checking if there was already an input box on the screen
    if (document.getElementById('input') !== null) {
      taskListDiv.removeChild(document.getElementById('input'));
    }
    const input = document.createElement('ul');
    input.id = 'input';
    input.className = 'list-group-item item';

    const addTaskForm = createForm(list, taskListDiv);
    input.append(addTaskForm);

    taskListDiv.appendChild(input);
  });

  return card;
};

export {domList};



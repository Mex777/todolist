import './todolist.css';
import {task} from './todolist';
import {domItem} from './task-dom';

const domList = (list) => {
  const card = document.createElement('div');
  card.className = 'card';

  const div = document.createElement('div');
  div.className = 'card-header item';

  const title = document.createElement('h1');
  title.innerText = list.getTitle();
  div.appendChild(title);

  // add tasks button
  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  const buttonContent = document.createElement('h2');
  buttonContent.textContent = '+';
  button.appendChild(buttonContent);

  div.appendChild(button);
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
    const input = document.createElement('ul');
    input.className = 'list-group-item item';

    const form = document.createElement('form');
    form.onsubmit = 'return false';

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
    const descriptionInput = document.createElement('input');
    descriptionInput.className = 'form-control';
    descriptionDiv.append(descriptionLabel, descriptionInput);

    const addTask = document.createElement('button');
    addTask.className = 'btn btn-primary';
    addTask.innerText = 'Add';
    addTask.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(nameInput.value);
      if (nameInput.value === '') {
        nameInput.style.border = '1px solid red';
        return;
      }

      const item = task(nameInput.value, descriptionInput.value, false);
      list.addItem(item);
      const itemDiv = domItem(list, item);
      taskListDiv.append(itemDiv);
      taskListDiv.removeChild(input);
    });

    const cancel = document.createElement('button');
    cancel.className = 'btn btn-danger';
    cancel.innerText = 'X';
    cancel.type = 'button';
    cancel.addEventListener('click', () => {
      taskListDiv.removeChild(input);
    });

    form.append(nameDiv, descriptionDiv, addTask, cancel);
    input.append(form);
    taskListDiv.appendChild(input);
  });

  return card;
};

export {domList};



import './todolist.css';
import {domItem} from './task-dom';

const header = (text) => {
  const div = document.createElement('div');
  div.className = 'card-header item';

  const title = document.createElement('h1');
  title.innerText = text;
  div.appendChild(title);

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  const buttonContent = document.createElement('h2');
  buttonContent.textContent = '+';
  button.appendChild(buttonContent);
  div.appendChild(button);

  return div;
};

const todoList = (list) => {
  const card = document.createElement('div');
  card.className = 'card';


  const cardHeader = header(list.getTitle());
  card.appendChild(cardHeader);

  const taskList = list.getTasks();
  const taskListDiv = document.createElement('ul');
  taskListDiv.className = 'list-group';
  for (let i = 0; i < taskList.length; ++i) {
    const currTask = domItem(taskList[i]);
    taskListDiv.appendChild(currTask);
  }
  card.appendChild(taskListDiv);

  const addItem = (item) => {
    taskListDiv.appendChild(domItem(item));
  };

  const removeItem = (item) => {
    taskListDiv.removeChild(item);
  };

  const getCard = () => card;

  return {addItem, removeItem, getCard};
};

export {todoList};



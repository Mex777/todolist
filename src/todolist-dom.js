import './todolist.css';
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

  return card;
};

export {domList};



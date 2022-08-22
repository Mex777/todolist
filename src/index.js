import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './todolist.css';
import {Task, toDoList} from './todolist';
import {domList} from './todolist-dom';

const parseList = (name) => {
  const list = toDoList(name);
  const listTasksJSON = localStorage.getItem(name);
  const listTasks = JSON.parse(listTasksJSON);
  if (listTasks != null) {
    for (let i = 0; i < listTasks.length; ++i) {
      list.addItem(listTasks[i]);
    }
  }

  return list;
};

const listsInJSON = localStorage.getItem('lists');
const lists = JSON.parse(listsInJSON);
const defaultList = parseList(lists[0]);

const div = document.createElement('div');
div.className = 'container';
div.id = 'todolist';
// const todo = document.createElement('div');
// todo.id = 'todolist';
const listDiv = domList(defaultList);
// todo.append(listDiv);
div.append(listDiv);

const form = document.createElement('form');

const inputDiv = document.createElement('div');
const titleLabel = document.createElement('label');
titleLabel.innerText = 'Title';
const titleInput = document.createElement('input');
inputDiv.append(titleLabel, titleInput);

const addButton = document.createElement('button');
addButton.innerText = 'ADD';
addButton.type = 'button';

form.append(inputDiv, addButton);

const listOfTODOS = document.createElement('ul');
for (let i = 0; i < lists.length; ++i) {
  const item = document.createElement('li');
  item.innerText = lists[i];
  item.addEventListener('click', () => {
    const currList = parseList(lists[i]);
    div.removeChild(div.lastChild);
    div.appendChild(domList(currList));
  });
  listOfTODOS.append(item);
}

addButton.addEventListener('click', () => {
  if (titleInput.value == '' || localStorage[titleInput.value] != null) {
    console.log('inv');
    return;
  }
  listOfTODOS.append(titleInput.value);
  lists.push(titleInput.value);
  localStorage['lists'] = JSON.stringify(lists);

  const tasks = [];
  //   tasks.push(new Task('test', 'test', false));
  localStorage[titleInput.value] = JSON.stringify(tasks);
});

document.body.appendChild(div);
document.body.appendChild(form);
document.body.append(listOfTODOS);

// const lists = ['Default'];
// const toJSON = JSON.stringify(lists);
// localStorage['lists'] = toJSON;

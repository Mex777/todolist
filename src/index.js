import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './todolist.css';
import {toDoList} from './todolist';
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


// const lists = [];
// const inJSON = JSON.stringify(lists);
// localStorage['lists'] = inJSON;

const div = document.createElement('div');
div.className = 'container';
div.id = 'todolist';
if (lists.length) {
  const defaultList = parseList(lists[0]);
  const listDiv = domList(defaultList);
  div.append(listDiv);
}

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

const addToDoList = (name) => {
  const item = document.createElement('li');
  item.id = name;
  item.innerText = name;
  item.addEventListener('click', () => {
    const currList = parseList(name);
    if (div.hasChildNodes()) {
      div.removeChild(div.lastChild);
    }
    div.appendChild(domList(currList));
  });
  listOfTODOS.append(item);
};

const listOfTODOS = document.createElement('ul');
for (let i = 0; i < lists.length; ++i) {
  addToDoList(lists[i]);
}

addButton.addEventListener('click', () => {
  if (titleInput.value == '' || localStorage[titleInput.value] != null) {
    console.log('inv');
    return;
  }
  addToDoList(titleInput.value);
  lists.push(titleInput.value);
  localStorage['lists'] = JSON.stringify(lists);

  const tasks = [];
  localStorage[titleInput.value] = JSON.stringify(tasks);
  titleInput.value = '';
});

const removeList = (listName) => {
  // removing it from the list
  for (let i = 0; i < lists.length; ++i) {
    if (lists[i] === listName) {
      lists.splice(i, 1);
      break;
    }
  }

  // removing it from storage
  localStorage['lists'] = JSON.stringify(lists);
  localStorage.removeItem(listName);

  // removing it from the screen
  listOfTODOS.removeChild(document.getElementById(listName));
  div.removeChild(div.lastChild);
};

document.body.appendChild(div);
document.body.appendChild(form);
document.body.append(listOfTODOS);

export {removeList};

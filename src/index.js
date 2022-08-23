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

const header = document.createElement('div');
header.className = 'header';
header.innerHTML = '<h1>MEX\'s to do';
const listsInJSON = localStorage.getItem('lists');
const lists = JSON.parse(listsInJSON);


// const lists = [];
// const inJSON = JSON.stringify(lists);
// localStorage['lists'] = inJSON;

const div = document.createElement('div');
div.className = 'container todo';
div.id = 'todolist';
if (lists.length) {
  const defaultList = parseList(lists[0]);
  const listDiv = domList(defaultList);
  // listDiv.className = 'tlist';
  div.append(listDiv);
}

const form = document.createElement('form');

const inputDiv = document.createElement('div');
inputDiv.className = 'form-group lig';
const titleLabel = document.createElement('label');
titleLabel.innerText = 'Title';
titleLabel.style.color = 'white';
titleLabel.style.padding = '.4rem';
// titleLabel.style.fontSize = '2rem';
const titleInput = document.createElement('input');
titleInput.className = 'form-control';
titleInput.placeholder = 'Add new To-do list';
inputDiv.append(titleLabel, titleInput);

const addButton = document.createElement('button');
addButton.className = 'btn btn-primary';
addButton.innerText = 'ADD';
addButton.hidden = true;

form.append(inputDiv, addButton);

const addToDoList = (name) => {
  const item = document.createElement('li');
  item.id = name;
  item.innerText = name;
  item.className = 'list-group-item lig';
  item.addEventListener('click', () => {
    const currList = parseList(name);
    if (div.hasChildNodes()) {
      div.removeChild(div.lastChild);
    }
    div.appendChild(domList(currList));
  });
  listOfTODOS.append(item);
};

const sideBar = document.createElement('div');
sideBar.className = 'sidebar';
const listOfTODOS = document.createElement('ul');
listOfTODOS.className = 'list-group';
for (let i = 0; i < lists.length; ++i) {
  addToDoList(lists[i]);
}
sideBar.appendChild(form);
sideBar.appendChild(listOfTODOS);

addButton.addEventListener('click', (e) => {
  e.preventDefault();
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

document.body.append(header);
document.body.append(sideBar);
document.body.appendChild(div);
// document.body.appendChild(form);

export {removeList};

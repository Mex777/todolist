import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './todolist.css';
import {toDoList} from './todolist';
import {domList} from './todolist-dom';

const defaultList = toDoList('Default');
const itemsJSON = localStorage.getItem('Default');
const obj = JSON.parse(itemsJSON);
for (let i = 0; i < obj.length; ++i) {
  defaultList.addItem(obj[i]);
}

const div = document.createElement('div');
div.className = 'container';
div.id = 'todolist';
const listDiv = domList(defaultList);
div.append(listDiv);

// const listOfTODOS = document.createElement('div');
// const addButton = document.createElement('button');
// addButton.


document.body.appendChild(div);

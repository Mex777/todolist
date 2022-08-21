import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './todolist.css';
import {task, toDoList} from './todolist';
import {domList} from './todolist-dom';

const defaultList = toDoList('Default');
const brushTeeth = task(
    'Brush teeth',
    'I have to brush my teeth before bed', false,
);

const item = task('Eat', 'order food and eat', true);

const ite2 = task('test', 'testst', true);

defaultList.addItem(brushTeeth);
defaultList.addItem(item);
defaultList.addItem(ite2);

const div = document.createElement('div');
div.className = 'container';
div.id = 'todolist';
const listDiv = domList(defaultList);


div.append(listDiv);

document.body.appendChild(div);

import 'bootstrap/dist/css/bootstrap.min.css';
import './todolist.css';
import {task, toDoList} from './todolist';
import {todoList} from './todolist-dom';


const defaultList = toDoList('Default');
const brushTeeth = task(
    'Brush teeth',
    'I have to brush my teeth before bed', false,
);

const item = task('Eat', 'order food and eat', true);

defaultList.addItem(brushTeeth);
defaultList.addItem(item);

const div = document.createElement('div');
div.className = 'container';
div.append(todoList(defaultList));
document.body.appendChild(div);

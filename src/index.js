// import 'bootstrap/dist/css/bootstrap.min.css';
import { task, toDoList, domList } from './todolist';


const defaultList = toDoList('default');
const brushTeeth = task('Brush teeth', 'I have to brush my teeth before bed', false);

defaultList.addItem(brushTeeth);

const div = domList(defaultList);
document.body.appendChild(div);


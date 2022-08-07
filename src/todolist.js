import './todolist.css';

const task = (name, desc, state) => {
  let title = name;
  let description = desc;
  let priority = state;

  const setTitle = (name) => {
    title = name;
  };

  const setDescription = (desc) => {
    description = desc;
  };

  const setPriority = (state) => {
    priority = state;
  };

  const getTitle = () => title;

  const getDescription = () => description;

  const getPriority = () => priority;

  return {setTitle, setDescription, setPriority,
    getTitle, getDescription, getPriority};
};

//  The task list class
const toDoList = (name) => {
  const title = name;
  const tasks = [];

  const addItem = (item) => {
    tasks.push(item);
  };

  const deleteItem = (item) => {
    for (let i = 0; i < items.length(); ++i) {
      if (items[i] === item) {
        items = items.splice(i, 1);
        break;
      }
    }
  };

  const getTitle = () => title;

  const getTasks = () => tasks;

  return {addItem, deleteItem, getTitle, getTasks};
};

export {task, toDoList};

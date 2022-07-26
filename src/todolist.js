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
  }

  const getTitle = () => title;

  const getDescription = () => description;

  const getPriority = () => priority;

  return {setTitle, setDescription, setPriority, getTitle, getDescription, getPriority};
};

// The task list class
const toDoList = (name) => {
  const title = name;
  let tasks = [];

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

const domList = (list) => {
  const div = document.createElement('div');
  div.className = 'container';

  const title = document.createElement('h1');
  title.innerText = list.getTitle();
  div.appendChild(title);

  const taskList = list.getTasks();
  const taskListDiv = document.createElement('div');
  for (let i = 0; i < taskList.length; ++i) {
    const currTask = document.createElement('div');

    const taskTitle = document.createElement('h2');
    taskTitle.innerText = taskList[i].getTitle();
    currTask.appendChild(taskTitle);

    const description = document.createElement('p');
    description.innerText = taskList[i].getDescription();
    currTask.appendChild(description);

    taskListDiv.appendChild(currTask);
  }
  div.appendChild(taskListDiv);
  return div;
}

export {task, toDoList, domList};

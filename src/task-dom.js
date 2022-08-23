import {domList} from './todolist-dom';

const domItem = (list, item) => {
  const task = document.createElement('li');
  task.className = 'list-group-item item';

  const textContent = document.createElement('div');

  const taskTitle = document.createElement('h4');
  taskTitle.innerText = item.name;
  textContent.appendChild(taskTitle);

  const description = document.createElement('p');
  description.innerText = item.desc;
  textContent.appendChild(description);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger';
  deleteButton.style.height = '50%';

  const icon = document.createElement('i');
  icon.className = 'bi bi-trash3-fill';
  icon.style.color = 'white';
  deleteButton.append(icon);

  deleteButton.addEventListener('click', () => {
    list.deleteItem(item);
    // refresh
    const div = document.getElementById('todolist');
    div.removeChild(div.lastChild);
    div.appendChild(domList(list));

    // updating the storage
    localStorage.removeItem(list.getTitle());
    const tasksInJSON = JSON.stringify(list.getTasks());
    localStorage[list.getTitle()] = tasksInJSON;
  });

  task.appendChild(textContent);
  task.appendChild(deleteButton);
  return task;
};

export {domItem};

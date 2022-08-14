import controller from './controller';

const domItem = (list, item) => {
  const task = document.createElement('li');
  task.className = 'list-group-item item';

  const textContent = document.createElement('div');

  const taskTitle = document.createElement('h4');
  taskTitle.innerText = item.getTitle();
  textContent.appendChild(taskTitle);

  const description = document.createElement('p');
  description.innerText = item.getDescription();
  textContent.appendChild(description);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger';
  deleteButton.style.height = '50%';

  const icon = document.createElement('i');
  icon.className = 'bi bi-trash3-fill';
  icon.style.color = 'white';
  deleteButton.append(icon);

  deleteButton.addEventListener('click', () => {
    controller(list).delItem(item);
  });

  task.appendChild(textContent);
  task.appendChild(deleteButton);
  return task;
};

export {domItem};

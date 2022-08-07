const domItem = (item) => {
  const task = document.createElement('li');
  task.className = 'list-group-item';

  const taskTitle = document.createElement('h4');
  taskTitle.innerText = item.getTitle();
  task.appendChild(taskTitle);

  const description = document.createElement('p');
  description.innerText = item.getDescription();
  task.appendChild(description);

  return task;
};

export {domItem};

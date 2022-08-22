/**
 * the task object
 * @param {*} name
 * @param {*} desc
 * @param {*} priority
 */
function Task(name, desc, priority) {
  this.name = name;
  this.desc = desc;
  this.priority = priority;
}
//  The task list class
const toDoList = (name) => {
  const title = name;
  const tasks = [];

  const addItem = (item) => {
    tasks.push(item);
  };

  const deleteItem = (item) => {
    for (let i = 0; i < tasks.length; ++i) {
      if (tasks[i] === item) {
        tasks.splice(i, 1);
        return;
      }
    }
  };

  const getTitle = () => title;

  const getTasks = () => tasks;

  return {addItem, deleteItem, getTitle, getTasks};
};

export {Task, toDoList};

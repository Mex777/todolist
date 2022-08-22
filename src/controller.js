import {domList} from './todolist-dom';

const controller = (list) => {
  const addItem = () => {
    // tbd modal to get info.

    list.addItem(item);
  };

  const delItem = (item) => {
    console.log(list.getTasks().length);
    list.deleteItem(item);
    // refresh
    const div = document.getElementById('todolist');
    div.removeChild(div.lastChild);
    div.appendChild(domList(list));

    // updating the storage
    localStorage.removeItem(list.getTitle());
    const tasksInJSON = JSON.stringify(list.getTasks());
    localStorage[list.getTitle()] = tasksInJSON;
  };

  return {addItem, delItem};
};

export default controller;

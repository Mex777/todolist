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
  };

  return {addItem, delItem};
};

export default controller;

import {domList} from './todolist-dom';

const controller = (list) => {
  const addItem = () => {
    // modal to get info.

    list.addItem(item);
  };

  const delItem = (item) => {
    console.log(list.getTasks().length);
    list.deleteItem(item);
    // refresh
    document.body.removeChild(document.body.lastChild);
    document.body.appendChild(domList(list));
  };

  return {addItem, delItem};
};

export default controller;

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domList": () => (/* binding */ domList),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
// import 'bootstrap/dist/css/bootstrap.min.css';



const defaultList = (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.toDoList)('default');
const brushTeeth = (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.task)('Brush teeth', 'I have to brush my teeth before bed', false);

defaultList.addItem(brushTeeth);

const div = (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.domList)(defaultList);
document.body.appendChild(div);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUM7Ozs7Ozs7VUM5RWpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNxRDs7O0FBR3JELG9CQUFvQixtREFBUTtBQUM1QixtQkFBbUIsK0NBQUk7O0FBRXZCOztBQUVBLFlBQVksa0RBQU87QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2sgPSAobmFtZSwgZGVzYywgc3RhdGUpID0+IHtcbiAgbGV0IHRpdGxlID0gbmFtZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZGVzYztcbiAgbGV0IHByaW9yaXR5ID0gc3RhdGU7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmFtZSkgPT4ge1xuICAgIHRpdGxlID0gbmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChkZXNjKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjO1xuICB9O1xuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKHN0YXRlKSA9PiB7XG4gICAgcHJpb3JpdHkgPSBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gIHJldHVybiB7c2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXRQcmlvcml0eSwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRQcmlvcml0eX07XG59O1xuXG4vLyBUaGUgdGFzayBsaXN0IGNsYXNzXG5jb25zdCB0b0RvTGlzdCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gbmFtZTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgdGFza3MucHVzaChpdGVtKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aCgpOyArK2kpIHtcbiAgICAgIGlmIChpdGVtc1tpXSA9PT0gaXRlbSkge1xuICAgICAgICBpdGVtcyA9IGl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIFxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzO1xuXG4gIHJldHVybiB7YWRkSXRlbSwgZGVsZXRlSXRlbSwgZ2V0VGl0bGUsIGdldFRhc2tzfTtcbn07XG5cbmNvbnN0IGRvbUxpc3QgPSAobGlzdCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbGlzdC5nZXRUaXRsZSgpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IHRhc2tMaXN0ID0gbGlzdC5nZXRUYXNrcygpO1xuICBjb25zdCB0YXNrTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgY3VyclRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRhc2tMaXN0W2ldLmdldFRpdGxlKCk7XG4gICAgY3VyclRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2tMaXN0W2ldLmdldERlc2NyaXB0aW9uKCk7XG4gICAgY3VyclRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQoY3VyclRhc2spO1xuICB9XG4gIGRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7dGFzaywgdG9Eb0xpc3QsIGRvbUxpc3R9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyB0YXNrLCB0b0RvTGlzdCwgZG9tTGlzdCB9IGZyb20gJy4vdG9kb2xpc3QnO1xuXG5cbmNvbnN0IGRlZmF1bHRMaXN0ID0gdG9Eb0xpc3QoJ2RlZmF1bHQnKTtcbmNvbnN0IGJydXNoVGVldGggPSB0YXNrKCdCcnVzaCB0ZWV0aCcsICdJIGhhdmUgdG8gYnJ1c2ggbXkgdGVldGggYmVmb3JlIGJlZCcsIGZhbHNlKTtcblxuZGVmYXVsdExpc3QuYWRkSXRlbShicnVzaFRlZXRoKTtcblxuY29uc3QgZGl2ID0gZG9tTGlzdChkZWZhdWx0TGlzdCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
const about = (restaurant) => {
  let divContent = document.getElementById('content');
  divContent.classList.add('content-about');

  const divCopy = document.createElement('div');
  divCopy.classList.add('content-text');
  divCopy.textContent = restaurant.copy;
  divContent.appendChild(divCopy);

  const divHoursContainer = document.createElement('div');
  divHoursContainer.classList.add('content-container');
  const divHoursTitle = document.createElement('div');
  divHoursTitle.classList.add('content-title');
  divHoursTitle.textContent = 'Hours';
  divHoursContainer.appendChild(divHoursTitle);
  // separates hours into grid cells
  for (const item of restaurant.hours) {
    const divHoursText = document.createElement('div');
    divHoursText.classList.add('content-text');
    divHoursText.textContent = item;
    divHoursContainer.appendChild(divHoursText);
  }
  divContent.appendChild(divHoursContainer);

  const divLocationContainer = document.createElement('div');
  divLocationContainer.classList.add('content-container');
  const divLocationTitle = document.createElement('div');
  divLocationTitle.classList.add('content-title');
  divLocationTitle.textContent = 'Location';
  divLocationContainer.appendChild(divLocationTitle);
  const divLocationText = document.createElement('div');
  divLocationText.classList.add('content-text');
  divLocationText.textContent = restaurant.location;
  divLocationContainer.appendChild(divLocationText);
  divContent.appendChild(divLocationContainer);
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQubWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGFib3V0ID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBkaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYWJvdXQnKTtcblxuICBjb25zdCBkaXZDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkNvcHkuY2xhc3NMaXN0LmFkZCgnY29udGVudC10ZXh0Jyk7XG4gIGRpdkNvcHkudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmNvcHk7XG4gIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2Q29weSk7XG5cbiAgY29uc3QgZGl2SG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2SG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcbiAgY29uc3QgZGl2SG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZIb3Vyc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGl0bGUnKTtcbiAgZGl2SG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG4gIGRpdkhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkhvdXJzVGl0bGUpO1xuICAvLyBzZXBhcmF0ZXMgaG91cnMgaW50byBncmlkIGNlbGxzXG4gIGZvciAoY29uc3QgaXRlbSBvZiByZXN0YXVyYW50LmhvdXJzKSB7XG4gICAgY29uc3QgZGl2SG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SG91cnNUZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICAgIGRpdkhvdXJzVGV4dC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgZGl2SG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2SG91cnNUZXh0KTtcbiAgfVxuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkhvdXJzQ29udGFpbmVyKTtcblxuICBjb25zdCBkaXZMb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMb2NhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNvbnRhaW5lcicpO1xuICBjb25zdCBkaXZMb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkxvY2F0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGVudC10aXRsZScpO1xuICBkaXZMb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgZGl2TG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2TG9jYXRpb25UaXRsZSk7XG4gIGNvbnN0IGRpdkxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMb2NhdGlvblRleHQuY2xhc3NMaXN0LmFkZCgnY29udGVudC10ZXh0Jyk7XG4gIGRpdkxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQubG9jYXRpb247XG4gIGRpdkxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uVGV4dCk7XG4gIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2TG9jYXRpb25Db250YWluZXIpO1xufTtcblxuZXhwb3J0IHsgYWJvdXQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
const restaurant = (() => {
  const name = 'Cafe LOONA';
  const copy = 'Will you whisper to me? You’re the dejavu that wakes me up Now, is it you now? I can feel it coming, a mirage with wings How? is it true now?';
  const hours = ['Sunday: 8am - 8pm', 'Monday: 12pm - 12am', 'Tuesday: 12pm - 12am', 'Wednesday: 12pm - 12am', 'Thursday: 12pm - 12am', 'Friday: 12pm - 12am', 'Saturday: 12pm - 12am'];
  const location = '111 Orbit Drive, Satellite City, Moon';

  return { name, copy, hours, location };
})();

const about = () => {
  let divContent = document.getElementById('content');
  divContent.classList.add('content');
  divContent.setAttribute('id', 'content');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQubWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCByZXN0YXVyYW50ID0gKCgpID0+IHtcbiAgY29uc3QgbmFtZSA9ICdDYWZlIExPT05BJztcbiAgY29uc3QgY29weSA9ICdXaWxsIHlvdSB3aGlzcGVyIHRvIG1lPyBZb3XigJlyZSB0aGUgZGVqYXZ1IHRoYXQgd2FrZXMgbWUgdXAgTm93LCBpcyBpdCB5b3Ugbm93PyBJIGNhbiBmZWVsIGl0IGNvbWluZywgYSBtaXJhZ2Ugd2l0aCB3aW5ncyBIb3c/IGlzIGl0IHRydWUgbm93Pyc7XG4gIGNvbnN0IGhvdXJzID0gWydTdW5kYXk6IDhhbSAtIDhwbScsICdNb25kYXk6IDEycG0gLSAxMmFtJywgJ1R1ZXNkYXk6IDEycG0gLSAxMmFtJywgJ1dlZG5lc2RheTogMTJwbSAtIDEyYW0nLCAnVGh1cnNkYXk6IDEycG0gLSAxMmFtJywgJ0ZyaWRheTogMTJwbSAtIDEyYW0nLCAnU2F0dXJkYXk6IDEycG0gLSAxMmFtJ107XG4gIGNvbnN0IGxvY2F0aW9uID0gJzExMSBPcmJpdCBEcml2ZSwgU2F0ZWxsaXRlIENpdHksIE1vb24nO1xuXG4gIHJldHVybiB7IG5hbWUsIGNvcHksIGhvdXJzLCBsb2NhdGlvbiB9O1xufSkoKTtcblxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gIGRpdkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5cbiAgY29uc3QgZGl2Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDb3B5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICBkaXZDb3B5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5jb3B5O1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkNvcHkpO1xuXG4gIGNvbnN0IGRpdkhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGRpdkhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2SG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRpdGxlJyk7XG4gIGRpdkhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBkaXZIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZIb3Vyc1RpdGxlKTtcbiAgLy8gc2VwYXJhdGVzIGhvdXJzIGludG8gZ3JpZCBjZWxsc1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzdGF1cmFudC5ob3Vycykge1xuICAgIGNvbnN0IGRpdkhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkhvdXJzVGV4dC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRleHQnKTtcbiAgICBkaXZIb3Vyc1RleHQudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGRpdkhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkhvdXJzVGV4dCk7XG4gIH1cbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZIb3Vyc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgZGl2TG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcbiAgY29uc3QgZGl2TG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMb2NhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGl0bGUnKTtcbiAgZGl2TG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gIGRpdkxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uVGl0bGUpO1xuICBjb25zdCBkaXZMb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICBkaXZMb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmxvY2F0aW9uO1xuICBkaXZMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZMb2NhdGlvblRleHQpO1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IGFib3V0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
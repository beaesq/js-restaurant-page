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
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
const restaurant = (() => {
  const name = 'Cafe LOONA';
  const copy = 'Will you whisper to me? You’re the dejavu that wakes me up Now, is it you now? I can feel it coming, a mirage with wings How? is it true now?';
  const hours = ['Sunday: 8am - 8pm', 'Monday: 12pm - 12am', 'Tuesday: 12pm - 12am', 'Wednesday: 12pm - 12am', 'Thursday: 12pm - 12am', 'Friday: 12pm - 12am', 'Saturday: 12pm - 12am'];
  const location = '111 Orbit Drive, Satellite City, Moon';

  return { name, copy, hours, location };
})();

const content = () => {
  let divContainer = document.createElement('div');
  divContainer.innerHTML = ""; // idk if i need this

  divContainer.classList.add('container');
  divContainer.setAttribute('id', 'container');

  const divHeader = document.createElement('div');
  divHeader.classList.add('header');
  divHeader.setAttribute('id', 'header');
  divHeader.textContent = restaurant.name;
  divContainer.appendChild(divHeader);

  const divFooter = document.createElement('div');
  divFooter.classList.add('footer');
  divFooter.setAttribute('id', 'footer');
  divFooter.innerHTML = '2023 · Background photo by&nbsp;<a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a>&nbsp;on&nbsp;<a href="https://unsplash.com/photos/7BQzWIQOv9E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  divContainer.appendChild(divFooter);

  document.body.appendChild(divContainer);

  main();
};

const main = () => {
  console.log('main');
  let divContainer = document.getElementById('container');
  let divContent = document.createElement('div');
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

  divContainer.appendChild(divContent);
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlELG9JQUFvSSxRQUFRO0FBQ3JNOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCByZXN0YXVyYW50ID0gKCgpID0+IHtcbiAgY29uc3QgbmFtZSA9ICdDYWZlIExPT05BJztcbiAgY29uc3QgY29weSA9ICdXaWxsIHlvdSB3aGlzcGVyIHRvIG1lPyBZb3XigJlyZSB0aGUgZGVqYXZ1IHRoYXQgd2FrZXMgbWUgdXAgTm93LCBpcyBpdCB5b3Ugbm93PyBJIGNhbiBmZWVsIGl0IGNvbWluZywgYSBtaXJhZ2Ugd2l0aCB3aW5ncyBIb3c/IGlzIGl0IHRydWUgbm93Pyc7XG4gIGNvbnN0IGhvdXJzID0gWydTdW5kYXk6IDhhbSAtIDhwbScsICdNb25kYXk6IDEycG0gLSAxMmFtJywgJ1R1ZXNkYXk6IDEycG0gLSAxMmFtJywgJ1dlZG5lc2RheTogMTJwbSAtIDEyYW0nLCAnVGh1cnNkYXk6IDEycG0gLSAxMmFtJywgJ0ZyaWRheTogMTJwbSAtIDEyYW0nLCAnU2F0dXJkYXk6IDEycG0gLSAxMmFtJ107XG4gIGNvbnN0IGxvY2F0aW9uID0gJzExMSBPcmJpdCBEcml2ZSwgU2F0ZWxsaXRlIENpdHksIE1vb24nO1xuXG4gIHJldHVybiB7IG5hbWUsIGNvcHksIGhvdXJzLCBsb2NhdGlvbiB9O1xufSkoKTtcblxuY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgbGV0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gaWRrIGlmIGkgbmVlZCB0aGlzXG5cbiAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcblxuICBjb25zdCBkaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBkaXZIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgZGl2SGVhZGVyLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5uYW1lO1xuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcblxuICBjb25zdCBkaXZGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBkaXZGb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcbiAgZGl2Rm9vdGVyLmlubmVySFRNTCA9ICcyMDIzIMK3IEJhY2tncm91bmQgcGhvdG8gYnkmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJvamVraWxpYW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2FyYWggS2lsaWFuPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy83QlF6V0lRT3Y5RT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT4nO1xuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG5cbiAgbWFpbigpO1xufTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ21haW4nKTtcbiAgbGV0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gIGRpdkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5cbiAgY29uc3QgZGl2Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDb3B5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICBkaXZDb3B5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5jb3B5O1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkNvcHkpO1xuXG4gIGNvbnN0IGRpdkhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGRpdkhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2SG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRpdGxlJyk7XG4gIGRpdkhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBkaXZIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZIb3Vyc1RpdGxlKTtcbiAgLy8gc2VwYXJhdGVzIGhvdXJzIGludG8gZ3JpZCBjZWxsc1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzdGF1cmFudC5ob3Vycykge1xuICAgIGNvbnN0IGRpdkhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkhvdXJzVGV4dC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRleHQnKTtcbiAgICBkaXZIb3Vyc1RleHQudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGRpdkhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkhvdXJzVGV4dCk7XG4gIH1cbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZIb3Vyc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgZGl2TG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcbiAgY29uc3QgZGl2TG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMb2NhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGl0bGUnKTtcbiAgZGl2TG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gIGRpdkxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uVGl0bGUpO1xuICBjb25zdCBkaXZMb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICBkaXZMb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmxvY2F0aW9uO1xuICBkaXZMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZMb2NhdGlvblRleHQpO1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uQ29udGFpbmVyKTtcblxuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XG59O1xuXG5leHBvcnQgeyBjb250ZW50IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
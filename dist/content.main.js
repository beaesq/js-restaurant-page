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

  const divName = document.createElement('div');
  divName.classList.add('header');
  divName.textContent = restaurant.name;
  divContainer.appendChild(divName);

  let divContent = document.createElement('div');
  divContent.classList.add('content');

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

  const divFooter = document.createElement('div');
  divFooter.classList.add('footer');
  divFooter.innerHTML = '2023 · Background photo by&nbsp;<a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a>&nbsp;on&nbsp;<a href="https://unsplash.com/photos/7BQzWIQOv9E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  divContainer.appendChild(divFooter);

  return divContainer;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlELG9JQUFvSSxRQUFRO0FBQ3JNOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHJlc3RhdXJhbnQgPSAoKCkgPT4ge1xuICBjb25zdCBuYW1lID0gJ0NhZmUgTE9PTkEnO1xuICBjb25zdCBjb3B5ID0gJ1dpbGwgeW91IHdoaXNwZXIgdG8gbWU/IFlvdeKAmXJlIHRoZSBkZWphdnUgdGhhdCB3YWtlcyBtZSB1cCBOb3csIGlzIGl0IHlvdSBub3c/IEkgY2FuIGZlZWwgaXQgY29taW5nLCBhIG1pcmFnZSB3aXRoIHdpbmdzIEhvdz8gaXMgaXQgdHJ1ZSBub3c/JztcbiAgY29uc3QgaG91cnMgPSBbJ1N1bmRheTogOGFtIC0gOHBtJywgJ01vbmRheTogMTJwbSAtIDEyYW0nLCAnVHVlc2RheTogMTJwbSAtIDEyYW0nLCAnV2VkbmVzZGF5OiAxMnBtIC0gMTJhbScsICdUaHVyc2RheTogMTJwbSAtIDEyYW0nLCAnRnJpZGF5OiAxMnBtIC0gMTJhbScsICdTYXR1cmRheTogMTJwbSAtIDEyYW0nXTtcbiAgY29uc3QgbG9jYXRpb24gPSAnMTExIE9yYml0IERyaXZlLCBTYXRlbGxpdGUgQ2l0eSwgTW9vbic7XG5cbiAgcmV0dXJuIHsgbmFtZSwgY29weSwgaG91cnMsIGxvY2F0aW9uIH07XG59KSgpO1xuXG5jb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICBsZXQgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvLyBpZGsgaWYgaSBuZWVkIHRoaXNcblxuICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZOYW1lLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBkaXZOYW1lLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5uYW1lO1xuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2TmFtZSk7XG5cbiAgbGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgZGl2Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDb3B5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICBkaXZDb3B5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5jb3B5O1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkNvcHkpO1xuXG4gIGNvbnN0IGRpdkhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGRpdkhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2SG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRpdGxlJyk7XG4gIGRpdkhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBkaXZIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZIb3Vyc1RpdGxlKTtcbiAgLy8gc2VwYXJhdGVzIGhvdXJzIGludG8gZ3JpZCBjZWxsc1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgcmVzdGF1cmFudC5ob3Vycykge1xuICAgIGNvbnN0IGRpdkhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkhvdXJzVGV4dC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRleHQnKTtcbiAgICBkaXZIb3Vyc1RleHQudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGRpdkhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkhvdXJzVGV4dCk7XG4gIH1cbiAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChkaXZIb3Vyc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgZGl2TG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcbiAgY29uc3QgZGl2TG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMb2NhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGl0bGUnKTtcbiAgZGl2TG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gIGRpdkxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uVGl0bGUpO1xuICBjb25zdCBkaXZMb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGV4dCcpO1xuICBkaXZMb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmxvY2F0aW9uO1xuICBkaXZMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZMb2NhdGlvblRleHQpO1xuICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkxvY2F0aW9uQ29udGFpbmVyKTtcblxuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XG5cbiAgY29uc3QgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgZGl2Rm9vdGVyLmlubmVySFRNTCA9ICcyMDIzIMK3IEJhY2tncm91bmQgcGhvdG8gYnkmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJvamVraWxpYW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2FyYWggS2lsaWFuPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy83QlF6V0lRT3Y5RT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT4nO1xuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcblxuICByZXR1cm4gZGl2Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjb250ZW50IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
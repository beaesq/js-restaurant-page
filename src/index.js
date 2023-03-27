import './style.css';
import { about } from './about.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import _ from 'lodash';

const restaurant = require('./restaurant.json');

const content = () => {

  let divContainer = document.createElement('div');

  divContainer.classList.add('container');
  divContainer.setAttribute('id', 'container');

  const divHeader = document.createElement('div');
  divHeader.classList.add('header');
  divHeader.setAttribute('id', 'header');

  const divName = document.createElement('div');
  divName.textContent = restaurant.name;
  divName.classList.add('name');
  divHeader.appendChild(divName);

  const divLinks = document.createElement('div');
  divLinks.classList.add('links');
  for (const tab of ['About', 'Menu', 'Contact']) {
    const divTab = document.createElement('div');
    divTab.classList.add('tab');
    divTab.textContent = tab;
    const attr = _.camelCase(tab);
    divTab.setAttribute('tab', attr);
    divLinks.appendChild(divTab);
  }
  divHeader.appendChild(divLinks);
  divContainer.appendChild(divHeader);

  const divContent = document.createElement('div');
  divContent.classList.add('content');
  divContent.setAttribute('id', 'content');
  divContainer.appendChild(divContent);

  const divFooter = document.createElement('div');
  divFooter.classList.add('footer');
  divFooter.setAttribute('id', 'footer');
  divFooter.innerHTML = '2023 · Background photo by&nbsp;<a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a>&nbsp;on&nbsp;<a href="https://unsplash.com/photos/7BQzWIQOv9E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  divContainer.appendChild(divFooter);

  document.body.appendChild(divContainer);
  about(restaurant);
};

content();

let header = document.getElementById('header');
header.addEventListener('click', (e) => {
  if(e.target.classList.contains('tab')) {

    let tab = e.target.getAttribute('tab');
    let div = document.getElementById('content');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    setTabStyling(tab, e);
      
    switch (tab) {
      case 'about':
        about(restaurant);
        break;
      case 'menu':
        menu(restaurant);
        break;
      case 'contact':
        contact(restaurant);
        break;
       default:
        about(restaurant);
        break;
    }
  }
});

const setTabStyling = (tab, e) => {
  const links = e.currentTarget.getElementsByClassName('links');
  
  for (const child of links[0].children) {
    child.classList.add('tab-not-selected');
  }
  
  const selected = document.querySelector(`[tab = "${tab}"]`);
  switch (tab) {
    case 'about':
      selected.setAttribute('class','tab tab-selected');
      break;
    case 'menu':
      selected.setAttribute('class','tab tab-selected');
      break;
    case 'contact':
      selected.setAttribute('class','tab tab-selected');
      break;
     default:
      
      break;
  }
};
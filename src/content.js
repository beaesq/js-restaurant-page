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

export { content };
const contact = (restaurant) => {
  let divContent = document.getElementById('content');
  divContent.classList.add('content-contact');

  const divHeading = document.createElement('div');
  divHeading.classList.add('content-heading');
  divHeading.textContent = 'Contact Us';
  divContent.appendChild(divHeading);

  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  for (const person of restaurant.contact) {
    const divCard = document.createElement('div');
    divCard.classList.add('contact-card');
    const divName = document.createElement('div');
    divName.classList.add('name', 'content-text');
    divName.textContent = person.name
    divCard.appendChild(divName);
    const divTitle = document.createElement('div');
    divTitle.classList.add('title', 'content-text');
    divTitle.textContent = person.title
    divCard.appendChild(divTitle);
    const divTel = document.createElement('div');
    divTel.classList.add('tel', 'content-text');
    divTel.textContent = person.tel
    divCard.appendChild(divTel);
    const divEmail = document.createElement('div');
    divEmail.classList.add('email', 'content-text');
    divEmail.textContent = person.email
    divCard.appendChild(divEmail);
    const image = new Image;
    image.classList.add('image');
    image.src = images[person.image];
    divCard.appendChild(image);

    divContent.appendChild(divCard);
  }
};

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export { contact };
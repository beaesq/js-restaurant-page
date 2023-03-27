const menu = (restaurant) => {
  let divContent = document.getElementById('content');
  divContent.classList.add('content-menu');

  const divHeading = document.createElement('div');
  divHeading.classList.add('content-heading');
  divHeading.textContent = 'Menu';
  divContent.appendChild(divHeading);

  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  for (const category of restaurant.menu) {
    
    const divCategory = document.createElement('div');
    divCategory.classList.add('content-subheading');
    divCategory.textContent = category.category;
    divContent.appendChild(divCategory);

    for (const item of category.items) {
      const divCard = document.createElement('div');
      divCard.classList.add('menu-item');

      const divName = document.createElement('div');
      divName.classList.add('name');
      divName.textContent = item.name;
      divCard.appendChild(divName);
      const divDescription = document.createElement('div');
      divDescription.classList.add('description');
      divDescription.textContent = item.description;
      divCard.appendChild(divDescription);
      const image = new Image;
      image.classList.add('image');
      image.src = images[item.image];
      divCard.appendChild(image);
      
      divContent.appendChild(divCard);
    }
  }
};

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export { menu };
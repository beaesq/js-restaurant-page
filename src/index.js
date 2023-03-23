console.log('stan loona');

function component() {
  const element = document.createElement('div');
 const btn = document.createElement('button');

  element.innerHTML = 'hello'

 btn.innerHTML = 'Click me and check the console!';
 btn.onclick = () => console.log('stanloona');

 element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
require('./style.css');

const randomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(255);
  return Math.floor(Math.random() * (max - min)) + min;
};

const main = document.querySelector('main');
const app = document.querySelector('#app');
const container = document.querySelector('#container');

const newColor = () => {
  const newcolor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
  main.style.backgroundColor = newcolor;
  app.textContent = newcolor;

  const cube = document.createElement('div');
  cube.className = 'cube';
  cube.style.backgroundColor = newcolor;
  container.append(cube);
};

window.newColor = newColor;

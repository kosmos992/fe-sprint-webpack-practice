require('./style.css');

const randomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(255);
  return Math.floor(Math.random() * (max - min)) + min;
};

const main = document.querySelector('main');
const app = document.querySelector('#app');

const newColor = () => {
  const newcolor = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
  main.style.backgroundColor = newcolor;
  app.textContent = newcolor;
};

window.newColor = newColor;

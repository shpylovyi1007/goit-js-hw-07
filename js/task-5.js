const body = document.body;
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener('click', event => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});
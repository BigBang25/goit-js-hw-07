function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const colorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");

colorBtn.addEventListener("click", setRandomColor);

function setRandomColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = body.style.backgroundColor;
}
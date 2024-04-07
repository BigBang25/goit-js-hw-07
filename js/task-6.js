function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const clearBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i++) {
      const element = document.createElement("div");
      element.style.width = width + "px";
      element.style.height = width + "px";
      element.style.backgroundColor = getRandomHexColor();
      width += 10;
      height += 10;
      boxesContainer.appendChild(element);
    }
  return boxesContainer;
}

function removeBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", function () {
  if (input.value >= 1 && input.value <= 100) { 
    boxesContainer.innerHTML = "";
    createBoxes(input.value);
    input.value = "";
  }
});

clearBtn.addEventListener("click", function () {
  removeBoxes(input.value);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const deleteBtn = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmount);

function getAmount() {
  const inputValue = input.value;
  createBoxes(inputValue);
}

function createBoxes(amount) {
  let size = 30;

  if (amount > 0 && amount <= 100) {
    boxContainer.innerHTML = "";

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxContainer.append(box);
      size += 10;
    }
  }
}

deleteBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
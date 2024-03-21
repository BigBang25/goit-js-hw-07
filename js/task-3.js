const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", updateNameOutput);

function updateNameOutput(event) {
  const nameInputValue = nameInput.value.trim();

  nameOutput.textContent = nameInputValue === "" ? "Anonymous" : nameInputValue;
}
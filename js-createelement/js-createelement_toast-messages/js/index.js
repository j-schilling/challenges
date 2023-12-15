console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToastMessage = document.createElement("li");
  newToastMessage.classList.add("toast-container__message");
  newToastMessage.textContent = "this is a new message";
  toastContainer.appendChild(newToastMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});

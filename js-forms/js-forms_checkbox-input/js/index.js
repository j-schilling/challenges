console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

hideTosError();

hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isChecked = tosCheckbox.checked;

  if (!isChecked) {
    showTosError();
    return;
  }

  // eslint-disable-next-line no-alert
  alert("Form submitted");

  showSuccess();
});

tosCheckbox.addEventListener("change", (event) => {
  event.preventDefault();
  const isChecked = tosCheckbox.checked;

  if (!isChecked) {
    showTosError();
  } else {
    hideTosError();
  }
});

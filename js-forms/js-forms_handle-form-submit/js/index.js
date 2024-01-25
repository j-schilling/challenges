console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form: ", form);

  const formData = new FormData(event.target);
  console.log(formData);

  const data = Object.fromEntries(formData);
  console.log("Data: ", data);

  event.target.reset();

  event.target.elements.firstName.focus();
});

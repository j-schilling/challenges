console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array
// Looking at the `./js/index.js` , there is

// - an `ol` created and appended to the document
// - a string array stored to a variable called `programmingLanguages`.

// For each array item, create a list item for the ordered list with its value as visible text. Use the `for...of` loop.

// The following hints may guide you:

// - What was the property to set the text of an HTML element again?
// - Don't forget to append each list item!

const ol = document.createElement("ol");
main.append(ol);

console.log(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const i of programmingLanguages) {
  const li = document.createElement("li");
  ol.append(li);
  li.textContent = i;
}

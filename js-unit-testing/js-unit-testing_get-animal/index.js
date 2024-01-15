export function getAnimal(animalPluralName) {
  var result = "I do not like animals at all!";
  if (animalPluralName === "cats") {
    result = "I totally love cats!";
  } else if (typeof animalPluralName === "string") {
    result = `I like ${animalPluralName}!`;
  } else {
    result = "I do not like animals at all!";
  }
  return result;
}

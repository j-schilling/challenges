let startingBalance = 1000;
let monthlyContribution = 100;
let months = 12;

let totalSavings = startingBalance + monthlyContribution * months;

console.log(
  "After",
  months,
  "months of saving, you will have $" + totalSavings,
  "in your account."
);

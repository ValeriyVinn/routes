// Дано невідсортований масив із 3 натуральних чисел [ n1, n2, n3 ], визначте, чи можна сформувати "трійку Піфагора", використовуючи ці 3 цілі числа.

// const array = [12, 13, 5];

function isPythagoreanTriple(array) {
  const sorted = array.sort((a, b) => a - b);
  console.log(sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2);
}

isPythagoreanTriple([12, 13, 5]);




function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}

console.log(typeOfNaN('100F'));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"


  console.log(Number.isNaN(NaN))


console.log(String.length)
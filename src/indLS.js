function shuffleArray(array) {
  // Копіюємо вхідний масив, щоб не змінювати оригінальний
  let shuffledArray = array.slice();

  // Алгоритм Fisher-Yates
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function addOperatorsAfterOddIndices(array) {
  let resultArray = [];

  for (let i = 0; i < array.length; i += 1) {
    resultArray.push(array[i]);

    // Перевіряємо, чи індекс непарний
    if (i !== array.length - 1) {
      // Випадковим чином додаємо ' && ' або ' || '
      let randomOperator = Math.random() > 0.5 ? ' && ' : ' || ';
      resultArray.push(randomOperator);
    }
  }

  return resultArray.join('');
}

let arr = [0, NaN, 'null', 'undefined', false, 7, 0, 9, 1];
let shuffledArr = shuffleArray(arr);
let modifiedArr = addOperatorsAfterOddIndices(shuffledArr);
console.log(shuffledArr);
console.log(modifiedArr);
// console.log(eval(modifiedArr));

// const studyAlert = alert("Do you want to study?")
// console.log(typeof studyAlert)

// const studyPrompt = prompt("I'm studiing prompt")
// console.log( Number(studyPrompt))

// const studyConfirm = confirm("Do you want to study Confirm?")
// console.log(studyConfirm)
// Return true or false

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  let numberBoxs = Number(inputNumber.value);
  if (numberBoxs > inputNumber.getAttribute("max")) {
    numberBoxs = inputNumber.getAttribute("max");
    inputNumber.value = inputNumber.getAttribute("max");
  }
  createBoxes(numberBoxs);
});

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let sizeDivBox = 30;
  const divBoxElem = [];
  for (let i = 0; i < amount; i += 1) {
    let divColor = getRandomHexColor();
    divBoxElem.push(
      `<div style ="background-color:${divColor}; width:${sizeDivBox}px; height:${sizeDivBox}px;"></div>`
    );
    sizeDivBox += 10;
  }
  divBoxes.insertAdjacentHTML("beforeend", divBoxElem.join(""));
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}

//! 2 версія =====================

// const input = document.querySelector("input");
// const createBoxesBtn = document.querySelector("button[data-create]");
// const destroyBoxesBtn = document.querySelector("button[data-destroy]");
// const boxesRef = document.querySelector("#boxes");

// function createBoxes() {
//   const boxes = [];
//   let initialSize = 80;

//   for (let i = 1; i <= input.value; i += 1) {
//     initialSize = i > 1 ? initialSize + 10 : initialSize;
//     const color = getRandomHexColor();
//     boxes.push(
//       `<div style="width: ${initialSize}px; height: ${initialSize}px; background-color: ${color}"></div>`
//     );
//   }

//   const joinedBoxes = boxes.join("");
//   input.value = "";
//   return boxesRef.insertAdjacentHTML("beforeend", joinedBoxes);
// }

// function destroyBoxes() {
//   return (boxesRef.innerHTML = "");
// }

// createBoxesBtn.addEventListener("click", createBoxes);

// destroyBoxesBtn.addEventListener("click", destroyBoxes);


const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
});

// console.dir(fetch);



fetch('https://pokeapi.co/api/v2/pokemon/4').then(r => r.json()).then(pokemon => {
  console.log(pokemon)
})




// console.log(date);
// console.log(date.getHours());
// console.log(date.getTime());
// console.dir(Date);

// const date1 = Date.now();
// console.dir(Date.now);
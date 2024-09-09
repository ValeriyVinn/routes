// !  Variant 1 =============
// const targetValue = document.querySelector("#value");

// let counterValue = 0;

// const btnDecrement = document
//   .querySelector('[data-action="decrement"]')
//   .addEventListener("click", () => {
//     counterValue -= 1;
//     targetValue.textContent = counterValue;
//     // console.log(counterValue);
//   });

// const btnIncrement = document
//   .querySelector('[data-action="increment"]')
//   .addEventListener("click", () => {
//     counterValue += 1;
//     targetValue.textContent = counterValue;
//     // console.log(counterValue);
//   });


const value = document.getElementById('value')

const decrementBtn = document.querySelector('[data-action="decrement"]').addEventListener('click', toDecrease)
const incrementBtn = document.querySelector('[data-action="increment"]').addEventListener('click', toIncrease)

function toDecrease() {
  value.textContent -= 1
}
function toIncrease() {
  value.textContent = +value.textContent +1  ;
}


// btnDecrement.addEventListener("click", () => {
//   counterValue -= 1;
//   targetValue.textContent = counterValue;
//   console.log(counterValue)
// });

// btnIncrement.addEventListener("click", () => {
//   counterValue += 1;
//   targetValue.textContent = counterValue;
//   console.log(counterValue);
// });

// !  Variant 2 =============

// let counterValue = 0;

// const counter = document.querySelector("#value");
// const clickButton = document.querySelectorAll("#counter button");

// clickButton[0].addEventListener("click", () => {
//   counterValue -= 1;
//   counter.textContent = counterValue;
// });

// clickButton[1].addEventListener("click", () => {
//   counterValue += 1;
//   counter.textContent = counterValue;
// });
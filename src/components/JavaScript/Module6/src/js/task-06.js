// ! Version 1  ====================

const inputValue = document.getElementById("validation-input");

// inputValue.addEventListener("blur", (evt) => {
//   if (evt.target.value.length === 6) {
//     inputValue.classList.add("valid");
//     inputValue.classList.remove("invalid");
//     return;
//   }
//   inputValue.classList.add("invalid");
//   inputValue.classList.remove("valid");
// });


// ! Version 2  ====================

inputValue.addEventListener("blur", (evt) => {
  inputValue.classList.toggle("valid", evt.target.value.length === 6);
  inputValue.classList.toggle("invalid", evt.target.value.length !== 6);
});
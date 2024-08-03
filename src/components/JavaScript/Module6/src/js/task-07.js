const input = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

textToChange.style.fontSize = input.value + "px";

input.addEventListener("input", (event) => {
  textToChange.style.fontSize = `${input.value}px`;
});
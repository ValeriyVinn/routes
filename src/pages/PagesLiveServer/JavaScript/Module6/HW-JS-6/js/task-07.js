const input = document.getElementById("font-size-control");
const textToChange = document.getElementById("text");

textToChange.style.fontSize = input.value + "px";

input.addEventListener("input", () => {
  textToChange.style.fontSize = `${input.value}px`;
});
// ? ======= 1 варіант ========================================

// const liEl = document.querySelectorAll(".item");

// console.log(`Number of categories: ${liEl.length}`);

// liEl.forEach((elem) => {
//   console.log(`Category: ${elem.firstElementChild.textContent}`);
//   console.log(`Elements: ${elem.lastElementChild.children.length}`);
// });


// ? ======= 2 варіант ========================================

// const liQuantity = document.querySelectorAll(".item");

// console.log(`Number of categoties: ${liQuantity.length}`);
 
// Array.from(liQuantity).map((elem) => {
//   console.log(`Category: ${elem.firstElementChild.textContent}`)
//   console.log(`Elements: ${elem.lastElementChild.children.length}`);
// });

// ? ======= 3 варіант ========================================

// const liQuantity = document.querySelectorAll(".item");

// console.log(`Number of categoties: ${liQuantity.length}`);

// [...liQuantity].map((elem) => {
//   console.log(`Category: ${elem.firstElementChild.textContent}`)
//   console.log(`Elements: ${elem.lastElementChild.children.length}`);
// });

// ? ======= 4 варіант ========================================

// const categories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categories.length}`);
// console.log(" ");
// categories.forEach((category) => {
//   const group = [...category.children];
//   group.forEach((element) => {
//     if (element.tagName === "H2") {
//       console.log(`Elements: ${element.textContent}`);
//     }
//   });
//   group.forEach((element) => {
//     if (element.tagName === "UL") {
//       console.log(`Elements: ${element.children.length}`);
//     }
//   });
//   console.log(" ");
// });




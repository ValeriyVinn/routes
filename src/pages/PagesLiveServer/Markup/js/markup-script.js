
const acc = document.getElementsByClassName('accordion');
let i;

// Відновлення стану акордеонів при завантаженні сторінки
window.addEventListener('load', () => {
  for (i = 0; i < acc.length; i++) {
    const isActive = localStorage.getItem(`accordion-${i}`) === 'true';
    if (isActive) {
      acc[i].classList.add('active');
      const panel = acc[i].nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
});

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;

    // Збереження стану в localStorage
    const index = Array.prototype.indexOf.call(acc, this);
    localStorage.setItem(
      `accordion-${index}`,
      this.classList.contains('active')
    );

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

  
  // ! ----Slider 1 -------------
  // const slides = document.querySelector('.slides');
  // const slideElements = document.querySelectorAll('.slide');
  // const prevButton = document.querySelector('.prev');
  // const nextButton = document.querySelector('.next');
  
  // let currentIndex = 0;
  
  // function showSlide(index) {
  //     const offset = -index * 100;
  //     slides.style.transform = `translateX(${offset}%)`;
  // }
  
  // prevButton.addEventListener('click', () => {
  //     currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideElements.length - 1;
  //     showSlide(currentIndex);
  // });
  
  // nextButton.addEventListener('click', () => {
  //     currentIndex = (currentIndex < slideElements.length - 1) ? currentIndex + 1 : 0;
  //     showSlide(currentIndex);
  // });
  
  // ! Slider 2------------------
//   const slideElements = document.querySelectorAll('.slider-slide');
//   const menuItems = document.querySelectorAll('.slider-dropdown-content h4');
//   const sliderMenuTittle = document.querySelector('.slider-menu-title');
  
//   menuItems.forEach((item, index) => {
//     item.addEventListener('click', (event) => {
//       const clickedText = event.target.textContent;
  
//       slideElements.forEach(slide => slide.classList.remove('visible'));
//       slideElements[index].classList.add('visible');
      
//       sliderMenuTittle.textContent = clickedText;
//     });
//   });
  
  // Встановлюємо перший слайд активним за замовчуванням
  // slideElements[0].classList.add('visible');
  

  // ! Tabs -----------

  // document.querySelectorAll('.tab-button').forEach(button => {
  //   button.addEventListener('click', () => {
  //     // Зняти активний клас з усіх кнопок і контенту
  //     document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('actual'));
  //     document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('actual'));
  
  //     // Додати активний клас до вибраної кнопки і відповідного контенту
  //     button.classList.add('actual');
  //     document.getElementById(button.dataset.tab).classList.add('actual');
  //   });
  // });
  
  document.querySelectorAll('.tabs-container').forEach(container => {
    const buttons = container.querySelectorAll('.tab-button');
    const contents = container.querySelectorAll('.tab-content');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Зняти активний клас з усіх кнопок і контенту в поточному контейнері
        buttons.forEach(btn => btn.classList.remove('actual'));
        contents.forEach(content => content.classList.remove('actual'));
  
        // Додати активний клас до вибраної кнопки і відповідного контенту
        button.classList.add('actual');
        container.querySelector(`#${button.dataset.tab}`).classList.add('actual');
      });
    });
  });
  
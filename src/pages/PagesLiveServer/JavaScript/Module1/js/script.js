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


document.querySelector('.first').onclick = () => {

const instance =	basicLightbox.create(`
		<h1 class="green">HTML</h1>
		<p>Novice</p>
	`)
    instance.show()

    // function onEscKeyPress(event) {
        
    //   }
 const remove =     document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
          instance.close();
          document.removeEventListener('keydown', remove);
          console.log('Обробник події на "Escape" знятий.'); // Лог в консоль
        }
      });

}




document.querySelector('.second').addEventListener('click', () => {
    console.log('navy')
})



// document.querySelector('.first').onclick = () => {

// const instance =	basicLightbox.create(`
// 		<h1 class="green">HTML</h1>
// 		<p>Novice</p>
// 	`)
//     instance.show()

//     // function onEscKeyPress(event) {
        
//     //   }
//  const remove =     document.addEventListener('keydown', (event) => {
//         if (event.code === 'Escape') {
//           instance.close();
//           document.removeEventListener('keydown', remove);
//           console.log('Обробник події на "Escape" знятий.'); // Лог в консоль
//         }
//       });

// }




// document.querySelector('.second').addEventListener('click', () => {
//     console.log('navy')
// })

// const first = ('lioʊ hæd ˈɔlweɪz drimd ʌv ˈklaɪmɪŋ ðə ˈmaʊntən ðæt lumd oʊvər hɪz ˈvɪlɪʤ. wʌn deɪ, hi ˈfaɪnəli dɪˈsaɪdɪd tu maʊnt æn ˌɛkspəˈdɪʃən tu əbˈteɪn ðə vju frʌm ɪts pik. hɪz frɛndz wɜr ˈhɛzɪtənt æt fɜrst, bʌt lioʊ ˈmænəʤd tu pərˈsweɪd ðɛm, ˈpeɪntɪŋ ˈvɪvɪd ˈpɪkʧərz ʌv ðə ˈbjuti ðæt əˈweɪtɪd ðɛm æt ðə ˈsʌmət.'.split(" "))





//  first = ['As', 'Mia', 'looked', 'around', 'at', 'the', 'progress,', 'she', 'realized', 'that', 'the', 'storm', 'had', 'not', 'only', 'tested', 'their', 'resilience', 'but', 'also', 'brought', 'them', 'closer.', 'The', 'hardships', 'they', 'endured', 'had', 'forged', 'a', 'deeper', 'bond,', 'one', 'that', 'would', 'carry', 'them', 'forward,', 'no', 'matter', 'what', 'storms', 'lay', 'ahead.']



// const newFirst = first.map(word => `"${word}"`);

// console.log(newFirst);




const textarea = document.getElementById('string');
const array = document.querySelector(".array")
  
document.getElementById('getText').addEventListener('click', () => {
   const enteredText = textarea.value.split(" ");
// const enteredTextSplited = enteredText.split(" ")
const receivedText = enteredText.map(word => ` "${word}"`)

const output = array.insertAdjacentHTML("beforebegin", receivedText);
return output
});


// ! copy-section

function copyCode() {
   const code = document.getElementById('code-snippet').textContent;
   navigator.clipboard.writeText(code).then(() => {
     alert('Код скопійовано!');
   }).catch(err => {
     console.error('Не вдалося скопіювати', err);
   });
 }


import webApp from './img/6ccc8147-691d-49c6-8552-99a68ac9f8e3image.png';
import multiPageApp from './img/0a4dc4a0-f0e1-4c06-ad95-dd34d2c08f3cimage.png';
import singlePageApp from './img/7f90ae6b-00e1-443c-ac91-440a152720aeimage.png';

import css from '../../../../components/Layout.module.css';


const WebApps = () => {
return ( <div>
    <h1>Веб-застосунки</h1>
<p>У сучасній веб-розробці змінилися не тільки техніки, що дозволяють веб-сайтам виглядати краще, завантажуватися швидше і бути приємнішими у використанні. Насамперед змінилися фундаментальні речі - те, як ми проектуємо та створюємо веб-застосунки.</p>
<p>Візьмемо довільний веб-сайт, наприклад, для роботи з колекцією рецептів, розкладом тренувань тощо. Завжди є набір сторінок: домашня, профіль, сторінка колекції та сторінка одного елемента колекції.</p>
<img src={webApp} alt="web application" width='820'/>
<h2>Multiple-page Application</h2>
<p>Кілька років тому ми використовували б підхід, який включає декілька окремих HTML-сторінок.</p>
<img src={multiPageApp} alt="multiple-page application
" width='820'/>
<ul className={css.sectionList}>
    <li>Архітектура клієнт-сервер</li>
    <li>Вся логіка живе на сервері</li>
    <li>На кожен запит сервер надсилає готовий HTML-документ</li>
    <li>Перезавантаження сторінки при кожному запиті</li>
    <li>Погана інтерактивність</li>
    <li>Відмінне SEO</li>
</ul>
<h2>Single-page Application</h2>
<p>Сучасний підхід – сайт, на якому користувач ніколи не переходить на інші HTML-сторінки. Інтерфейс, замість запиту HTML-документів з сервера, перемальовується на клієнті, на одній і тій самій сторінці, без перезавантаження.</p>
<img src={singlePageApp} alt="single-page application" width='820' />
 <ul className={css.sectionList}>
    <li>Архітектура клієнт-сервер</li>
    <li>При завантаженні сайту сервер завжди віддає стартову HTML-сторінку index.html</li>
    <li>Кожен наступний запит на сервер отримує лише дані у JSON-форматі</li>
    <li>Оновлення інтерфейсу відбувається динамічно на клієнті</li>
    <li>Завантаження першої сторінки може бути досить повільним (лікується)</li>
    <li>Логіка, не пов'язана із безпекою, живе на клієнті</li>
    <li>Слабке SEO (лікується)</li>
    <li>Складність коду та його підтримки масштабується з кількістю функціоналу застосунку</li>
</ul>
<a href="https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58">
Single-page application vs. multiple-page application</a>

</div>

) 

}

export default WebApps
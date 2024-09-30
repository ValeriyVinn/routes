import components from './img/9bab0cb2-c25d-4d5b-b381-c06456d6b668image.png';
import componentFunction from './img/095d0f34-88f4-495b-a5e5-50ceb108bec0image.png';
import props from './img/836eb4af-6599-40ee-8d59-d989cef43034image.png';

import css from '../../../../components/Layout.module.css';

const ReactAbstractOneComponents = () => {
  return (
    <div>
      <h1>Компоненти</h1>
      <p>
        <b>Компоненти</b> – основні будівельні блоки React-застосунків, за
        допомогою яких інтерфейс розділяється на незалежні частини.
      </p>
      <p>
        Розробник створює невеликі компоненти, які можна поєднувати, щоб
        сформувати більші, або використовувати їх як самостійні елементи
        інтерфейсу. Найголовніше в цій концепції те, що і великі, і маленькі
        компоненти можна використовувати повторно і в поточному, і в новому
        проекті.
      </p>
      <img src={components} alt="" width="620" />
      <p>
        React-застосунок можна уявити як дерево компонентів. На верхньому рівні
        стоїть кореневий компонент, у якому вкладена довільна кількість інших
        компонентів. Кожен компонент повинен повернути JSX-розмітку, тим самим
        вказуючи, який HTML ми хочемо відрендерити в DOM.
      </p>
      <h2>Компоненти-функції</h2>
      <p>
        У найпростішій формі компонент – це JavaScript-функція з дуже простим
        контрактом: функція отримує об'єкт властивостей, який називається props
        і повертає дерево React-елементів.
      </p>
      <img src={componentFunction} alt="" width="620" />
      <p className={css.note}>
        ІНФОРМАЦІЯ: <br />
        Ім'я компонента обов'язково повинно починатися з великої літери. Назви
        компонентів з маленької літери зарезервовані для HTML-елементів. Якщо ви
        спробуєте назвати компонент card, а не Card, під час рендеру React
        проігнорує його та відрендерить тег &lt;card&gt;&lt;/card&gt;.
      </p>
      <pre className={css.code}>
        const&nbsp;MyFunctionalComponent&nbsp;=&nbsp;props&nbsp;=&gt;&nbsp;&lt;div&gt;Functional&nbsp;Component&lt;/div&gt;;
      </pre>
      <p>Компоненти-функції складають більшу частину React-застосунку.</p>
      <ul className={css.sectionList}>
        <li>Менше boilerplate-коду</li>
        <li>Легше сприймати</li>
        <li>Легше тестувати</li>
        <li>Немає контексту (this)</li>
      </ul>
      <p>Зробимо картку продукту компонентом-функцією.</p>
      <pre className={css.code}>
        const&nbsp;Product&nbsp;=&nbsp;props&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;&lt;https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&amp;h=480&amp;w=640&gt;&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Tacos&nbsp;With&nbsp;Lime&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width=&quot;640&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Tacos&nbsp;With&nbsp;Lime&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Price:&nbsp;10.99$&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
        <br />
        <br />
        (//&nbsp;У&nbsp;розмітці&nbsp;компонент&nbsp;записується&nbsp;як&nbsp;JSX-тег)
        <br />
        ReactDOM.createRoot(document.getElementById(&quot;root&quot;)).render(&lt;Product&nbsp;/&gt;);
      </pre>
      <h3>Властивості компонента (props)</h3>
      <p>
        Властивості (пропси) – це одна із основних концепцій React. Компоненти
        приймають довільні властивості і повертають React-елементи, що описують,
        що потрібно відрендерити в DOM.
      </p>
      <ul className={css.sectionList}>
        <li>
          Пропси використовуються для передачі даних від батька до дитини.
        </li>
        <li>
          Пропси передаються лише вниз по дереву від батьківського компонента.
        </li>
        <li>
          При зміні пропсів React ререндерить компонент і, можливо, оновлює DOM.
        </li>
        <li>Пропси доступні лише для читання, у дитині їх не можна змінити.</li>
      </ul>
      <img src={props} alt="" width="320" />
      <p>
        Пропсом може бути текст кнопки, зображення, url, будь-які дані для
        компонента. Пропси можуть бути рядками або результатом JS-виразу. Якщо
        передане лише ім'я пропса – це буль, за замовчуванням true.
      </p>
      <pre className={css.code}>
        const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Best&nbsp;selling&nbsp;products&lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Product&nbsp;name=&quot;Tacos&nbsp;With&nbsp;Lime&quot;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&lt;/&gt;
        <br />
        );
      </pre>
      <p>
        Компонент &lt;Product&gt; оголошує параметр props, це завжди буде
        об'єкт, що містить усі передані пропси.
      </p>
      <pre className={css.code}>
        const&nbsp;Product&nbsp;=&nbsp;props&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{props.name}&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </pre>
      <p>Додамо компоненту &lt;Products&gt; кілька інших властивостей.</p>
      <pre className={css.code}>
        const&nbsp;Product&nbsp;=&nbsp;props&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img&nbsp;src={props.imgUrl}&nbsp;alt=
        {props.name}&nbsp;width=&quot;640&quot;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{props.name}&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Price:&nbsp;{props.price}$&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </pre>
      <p>
        Відразу будемо використовувати простий патерн під час роботи з props.
        Оскільки props – це об'єкт, ми можемо деструктуризувати його у підписі
        функції. Це зробить код чистішим і читабельнішим.
      </p>
      <pre className={css.code}>
        const&nbsp;Product&nbsp;=&nbsp;({'{'}
        &nbsp;imgUrl,&nbsp;name,&nbsp;price&nbsp;{'}'})&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img&nbsp;src={'{'}imgUrl{'}'}&nbsp;alt={'{'}
        name{'}'}&nbsp;width=&quot;640&quot;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{'{'}name{'}'}&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Price:&nbsp;{'{'}price{'}'}$&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
        <br />
        <br />
        const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Best&nbsp;selling&nbsp;products&lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Product
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgUrl=&quot;&lt;https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&amp;h=480&amp;w=640&gt;&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name=&quot;Tacos&nbsp;With&nbsp;Lime&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price={'{'}10.99{'}'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Product
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imgUrl=&quot;&lt;https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&amp;h=480&amp;w=640&gt;&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name=&quot;Fries&nbsp;and&nbsp;Burger&quot;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price={'{'}14.29{'}'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </pre>
      <p>
        В підсумку ми створили компонент, що налаштовується, і який можна
        використовувати для відображення товару. Ми передаємо йому дані як
        пропси, а у відповідь отримуємо дерево React-елементів з підставленими
        значеннями.
      </p>
      <ul className={css.sectionList}>
        <li>
          <a href="https://react.dev/learn/your-first-component#components-ui-building-blocks">
            Компоненти
          </a>
        </li>
        <li>
          <a href="https://react.dev/learn/passing-props-to-a-component">
            Пропси
          </a>
        </li>
      </ul>
      <h3>Значення пропсів за замовчуванням</h3>
      <p>
        Що якщо компонент очікує якесь значення, а його не передали? - під час
        звернення до властивості об'єкта props отримаємо undefined.
      </p>
      <p>
        Для того щоб вказати значення властивостей за замовчуванням,
        використовується синтаксис значень за замовчуванням під час
        деструктуризації пропсів.
      </p>
      <pre className={css.code}>
        const&nbsp;Product&nbsp;=&nbsp;({'{'}
        <br />
        &nbsp;&nbsp;imgUrl&nbsp;=&nbsp;&quot;&lt;https://dummyimage.com/640x480/2a2a2a/ffffff&amp;text=Product+image+placeholder&gt;&quot;,
        <br />
        &nbsp;&nbsp;name,
        <br />
        &nbsp;&nbsp;price,
        <br />
        {'}'})&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img&nbsp;src={'{'}imgUrl{'}'}&nbsp;alt={'{'}
        name{'}'}&nbsp;width=&quot;640&quot;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{'{'}name{'}'}&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Price:&nbsp;{'{'}price{'}'}$&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
        <br />
        <br />
        `/*`
        <br />
        &nbsp;*&nbsp;Визначення&nbsp;defaultProps&nbsp;гарантує,&nbsp;що&nbsp;props.imgUrl&nbsp;матиме&nbsp;значення,
        <br />
        &nbsp;*&nbsp;навіть&nbsp;якщо&nbsp;воно&nbsp;не&nbsp;було&nbsp;вказане&nbsp;під&nbsp;час&nbsp;виклику&nbsp;компонента&nbsp;у&nbsp;батька.
        <br />
        &nbsp;*/
        <br />
        ReactDOM.createRoot(document.getElementById(&quot;root&quot;)).render(
        <br />
        &nbsp;&nbsp;&lt;Product&nbsp;name=&quot;Tacos&nbsp;With&nbsp;Lime&quot;&nbsp;price=
        {'{'}10.99{'}'}&nbsp;/&gt;
        <br />
        );
      </pre>
      <h3>Властивість props.children</h3>
      <p>
        Концепція дочірніх елементів дозволяє дуже просто робити композицію
        компонентів. У вигляді дітей можна передавати компоненти як вбудовані,
        так і кастомні. Це дуже зручно під час роботи зі складними складеними
        компонентами.
      </p>
      <ul className={css.sectionList}>
        <li>
          Властивість children автоматично доступна в кожному компоненті, її
          вмістом є те, що знаходиться між відкриваючим та закриваючим
          JSX-тегом.
        </li>
        <li>У функціональних компонентах звертаємось як props.children.</li>
        <li>Значенням props.children може бути практично все, що завгодно.</li>
      </ul>
      <p>
        Наприклад, у нас є компонент профілю &lt;Profile&gt; та оформлювальний
        компонент &lt;Panel&gt;, в який ми можемо поміщати довільний контент.
      </p>
      <pre className={css.code}>
        const&nbsp;Profile&nbsp;=&nbsp;({'{'}&nbsp;name,&nbsp;email&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Name:&nbsp;{'{'}name{'}'}&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Email:&nbsp;{'{'}email{'}'}&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
        <br />
        <br />
        const&nbsp;Panel&nbsp;=&nbsp;({'{'}&nbsp;title,&nbsp;children&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;section&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{'{'}title{'}'}&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'{'}children{'}'}
        <br />
        &nbsp;&nbsp;&lt;/section&gt;
        <br />
        );
        <br />
        <br />
        const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Panel&nbsp;title=&quot;User&nbsp;profile&quot;&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Profile&nbsp;name=&quot;Mango&quot;&nbsp;email=&quot;mango@mail.com&quot;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Panel&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </pre>
      <p>
        В іншому разі нам би довелося прокинути пропи для &lt;Profile&gt; через
        &lt;Panel&gt;, що тісніше пов'язує компоненти та ускладнює повторне
        використання.
      </p>
      <h3>Властивість propTypes</h3>
      <p></p>
      <p>
        Пакет<a href="https://www.npmjs.com/package/prop-types">prop-types</a>{' '}
        надає ряд валідаторів для перевірки коректності отриманих типів даних
        під час виконання коду, повідомляючи про невідповідності в консолі. Все
        що необхідно зробити – це описати типи пропсів, що отримуються
        компонентом у спеціальній статичній властивості propTypes. Перевірка
        пропсів за допомогою prop-types відбувається лише під час розробки, у
        продакшені в ній немає потреби.
      </p>
      <pre className={css.code}>npm install --save-dev prop-types</pre>
      <p>Використаємо prop-types та опишемо пропси компонента Product.</p>
      <pre className={css.code}>
        import&nbsp;PropTypes&nbsp;from&nbsp;&quot;prop-types&quot;;
        <br />
        <br />
        const&nbsp;Product&nbsp;=&nbsp;({'{'}
        <br />
        &nbsp;&nbsp;imgUrl&nbsp;=&nbsp;&quot;&lt;https://dummyimage.com/640x480/2a2a2a/ffffff&amp;text=Product+image+placeholder&gt;&quot;,
        <br />
        &nbsp;&nbsp;name,
        <br />
        &nbsp;&nbsp;price,
        <br />
        {'}'})&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;img&nbsp;src={'{'}imgUrl{'}'}&nbsp;alt={'{'}
        name{'}'}&nbsp;width=&quot;640&quot;&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{'{'}name{'}'}&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Price:&nbsp;{'{'}price{'}'}$&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
        <br />
        <br />
        Product.propTypes&nbsp;=&nbsp;{'{'}
        <br />
        &nbsp;&nbsp;imgUrl:&nbsp;PropTypes.string,
        <br />
        &nbsp;&nbsp;name:&nbsp;PropTypes.string.isRequired,
        <br />
        &nbsp;&nbsp;price:&nbsp;PropTypes.number.isRequired,
        <br />
        {'}'};
      </pre>
      <p>
        Спочатку застосовуються значення за замовчуванням, задані в
        defaultProps. Після цього запускається перевірка типів за допомогою
        propTypes. Отже, перевірка типів поширюється і на значення за
        замовчуванням.
      </p>
    </div>
  );
};

export default ReactAbstractOneComponents;

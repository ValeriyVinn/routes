import css from '../../../../components/Layout.module.css';

const ReactAbstractOneJSX = () => {
  return (
    <div>
      <h1>JSX</h1>

      <pre className={css.code}>
        const link = &lt;a href="&lt;https://reactjs.org/&gt;"&gt;React
        website&lt;/a&gt;;
      </pre>
      <p>
        Це не рядок і не HTML, цей XML-образний синтаксис називається JSX
        (JavaScript Syntax Extension) - розширення синтаксису JavaScript, за
        допомогою якого зручно описувати розмітку того, що ми хочемо побачити на
        екрані.
      </p>
      <ul className={css.sectionList}>
        <li>
          Дозволяє використовувати XML-образний синтаксис прямо у JavaScript
        </li>
        <li>Спрощує код, робить його декларативним та читабельним</li>
        <li>Описує об'єкти - елементи Virtual DOM</li>
        <li>Це не HTML, Babel трансформує JSX у виклики функцій</li>
        <li>У JSX можна використовувати всі можливості JavaScript</li>
      </ul>
      <p className={css.note}>
        REACT ЕЛЕМЕНТИ: <br />
        JSX створює елементи – найменші будівельні блоки React. Елементи Virtual
        DOM це звичайні JavaScript об'єкти, тому створювати їх дуже швидко.
      </p>
      <p>Використовуючи JSX, розмітка стає схожою на звичні HTML-шаблони.</p>
      <div className={css.tabs}>
        <button className={css.tabButton}>src/index.js</button>
      </div>

      <div>
        <pre className={css.code}>
const&nbsp;imageUrl&nbsp;=
<br/> &nbsp;&quot;https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&amp;h=480&amp;w=640&quot;;
<br/>const&nbsp;productPrice&nbsp;=&nbsp;10.99;
<br/>
<br/>
<br/>const&nbsp;product&nbsp;=&nbsp;(
<br/> &nbsp;&lt;div&gt;
<br/> &nbsp; &nbsp;&lt;img&nbsp;src={'{'}imageUrl{'}'}&nbsp;alt=&quot;Tacos&nbsp;With&nbsp;Lime&quot;&nbsp;width=&quot;640&quot;&nbsp;/&gt;
<br/> &nbsp; &nbsp;&lt;h2&gt;Tacos&nbsp;With&nbsp;Lime&lt;/h2&gt;
<br/> &nbsp; &nbsp;&lt;p&gt;Price:&nbsp;{'{'}productPrice{'}'}$&lt;/p&gt;
<br/> &nbsp; &nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
<br/> &nbsp;&lt;/div&gt;
<br/>);
</pre>
      </div>
      <ul className={css.sectionList}>
        <li>
          Усередині JSX можна використовувати будь-який валідний вираз,
          обертаючи його в фігурні дужки.
        </li>
        <li>
          Значення атрибутів вказуються в подвійних лапках, якщо це звичайний
          рядок, та у фігурних дужках, якщо значення обчислюється, або тип
          відрізняється від рядка.
        </li>
        <li>Всі атрибути React-елементів іменуються в camelCase нотації.</li>
        <li>
          JSX-теги можуть бути батьками інших JSX-тегів. Якщо тег порожній або
          самозакривається, його обов'язково необхідно закрити використовуючи
          /&gt;.
        </li>
      </ul>
      <h3>Рендер елементів у DOM-дерево</h3>
      <p>
        Для того, щоб відрендерувати елемент у DOM-дерево, у пакеті react-dom є
        методи createRoot(container) та render(element), які працюють разом.
      </p>
      <ul className={css.sectionList}>
        <li>
          Перший приймає посилання на існуючий DOM-елемент, наприклад div#root з
          index.html і створює корінь, в який буде рендеруватись вся програма.
        </li>
        <li>
          Другий чекає на посилання на React-елемент або компонент (що
          рендерити).
        </li>
      </ul>
      <div className={css.tabs}>
        <button className={css.tabButton}>src/index.js</button>
      </div>

      <div>
        <pre className={css.code}>
import&nbsp;ReactDOM&nbsp;from&nbsp;&quot;react-dom/client&quot;;
<br/>
<br/>
<br/>const&nbsp;imageUrl&nbsp;=
<br/> &nbsp;&quot;https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&amp;h=480&amp;w=640&quot;;
<br/>const&nbsp;productPrice&nbsp;=&nbsp;10.99;
<br/>
<br/>
<br/>const&nbsp;product&nbsp;=&nbsp;(
<br/> &nbsp;&lt;div&gt;
<br/> &nbsp; &nbsp;&lt;img&nbsp;src={'{'}imageUrl{'}'}&nbsp;alt=&quot;Tacos&nbsp;With&nbsp;Lime&quot;&nbsp;width=&quot;640&quot;&nbsp;/&gt;
<br/> &nbsp; &nbsp;&lt;h2&gt;Tacos&nbsp;With&nbsp;Lime&lt;/h2&gt;
<br/> &nbsp; &nbsp;&lt;p&gt;Price:&nbsp;{'{'}productPrice{'}'}$&lt;/p&gt;
<br/> &nbsp; &nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
<br/> &nbsp;&lt;/div&gt;
<br/>);
<br/>
<br/>
<br/>ReactDOM.createRoot(document.getElementById(&quot;root&quot;)).render(product);
</pre>
      </div>
      <p className={css.note}>
        ОДИН render() НА ПРОГРАМУ: <br />
        React використовує модель відносин предок - нащадок, тому достатньо
        використовувати лише один виклик render() в програмі. Рендер найвищого
        елемента в ієрархії потягне за собою рендер всього піддерева.
      </p>
      <h3>Правило спільного батька</h3>
      <p>
        Права частина висловлювання присвоювання має повертати одне значення.
        Розберемо наступний код із невалідною JSX-розміткою.
      </p>
      <pre className={css.code}>
        const&nbsp;post&nbsp;=&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;h2&gt;Post&nbsp;Header&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&lt;p&gt;Post&nbsp;text&lt;/p&gt;
        <br />
        );
      </pre>
      <p>
        Вираз це одне значення, результат деяких обчислень, звідси випливає
        правило спільного батька.
      </p>
      <pre className={css.code}>
        const&nbsp;post&nbsp;=&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Post&nbsp;Header&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Post&nbsp;text&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </pre>
      <p>
        Якщо в розмітці зайвий тег-обгортка не потрібний, використовуються
        фрагменти, схожі на DocumentFragment. Цей вбудований компонент при
        рендері розчиняється, підставляючи свій вміст.
      </p>
      <pre className={css.code}>
        import&nbsp;{'{'} Fragment {'}'}&nbsp;from&nbsp;&quot;react&quot;;
        <br />
        <br />
        const&nbsp;post&nbsp;=&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;Fragment&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Post&nbsp;Header&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Post&nbsp;text&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;/Fragment&gt; );
      </pre>
      <p>
        Синтаксис фрагментів можна скоротити та не додавати імпорт Fragment.
        Babel зробить всі необхідні трансформації, замінивши порожні JSX-теги на
        React.Fragment.
      </p>
      <pre className={css.code}>
        const&nbsp;post&nbsp;=&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Post&nbsp;Header&lt;/h2&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Post&nbsp;text&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;/&gt;
        <br />
        );
      </pre>
      <p>Додаткові матеріали</p>
      <a href="https://react.dev/learn/writing-markup-with-jsx">
        Знайомство з JSX
      </a>
    </div>
  );
};

export default ReactAbstractOneJSX;

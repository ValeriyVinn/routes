import css from '../../../../components/Layout.module.css';

const ReactAbstractOneCollections = () => {
  return (
    <div>
      <h1>Колекції</h1>
      <p>
        Для того щоб відрендерити колекцію однотипних елементів,
        використовується метод Array.prototype.map(), callback-функція якого,
        для кожного елемента колекції повертає JSX-розмітку. Отже, отримуємо
        масив React-елементів, який можна рендерити.
      </p>
      <pre className={css.code}>
        const&nbsp;favouriteBooks&nbsp;=&nbsp;[
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-1&quot;,&nbsp;name:&nbsp;&quot;JS&nbsp;for&nbsp;beginners&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-2&quot;,&nbsp;name:&nbsp;&quot;React&nbsp;basics&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-3&quot;,&nbsp;name:&nbsp;&quot;React&nbsp;Router&nbsp;overview&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-4&quot;,&nbsp;name:&nbsp;&quot;Redux&nbsp;in&nbsp;depth&quot;&nbsp;
        {'}'},
        <br />
        ];
        <br />
        <br />
        const&nbsp;BookList&nbsp;=&nbsp;({'{'}&nbsp;books&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;{'{'}
        <br />
        &nbsp;&nbsp;return&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
        books.map(book&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;{'{'}book.name
        {'}'}&lt;/li&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
        <br />
        &nbsp;&nbsp;);
        <br />
        {'}'};
        <br />
        <br />
        const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
        <br />
        &nbsp;&nbsp;return&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;BookList&nbsp;books={'{'}
        favouriteBooks{'}'}&nbsp;/&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
        <br />
        &nbsp;&nbsp;);
        <br />
        {'}'};
      </pre>
      <h2>Ключі</h2>
      <p>
        Під час виконання коду з прикладу вище спливе попередження про те, що
        для елементів списку потрібен ключ. React не може відрізнити елементи в
        колекції, таким чином, перемальовуючи всю колекцію повністю у разі
        будь-яких змін.
      </p>
      <p>
        <b>Ключ (key)</b> — це спеціальний рядковий проп, який потрібно задати
        під час створення елементів колекції.
      </p>
      <p>
        Елементи всередині колекції повинні бути забезпечені ключами, щоб мати
        стабільну ідентичність. React використовує ключі, щоб визначити, які з
        елементів в колекції необхідно створити і відрендерити знову, а не
        використовувати елементи з попереднього рендеру. Таким чином ми уникаємо
        перестворення всіх елементів колекції щоразу, коли щось змінюється.
      </p>
      <p>Ключі повинні бути:</p>
      <ul className={css.sectionList}>
        <li>
          <b>Унікальні</b> – ключ елемента повинен бути унікальним лише серед
          його сусідів. Немає сенсу у глобально унікальних ключах.
        </li>
        <li>
          <b>Стабільні</b> – ключ елемента не повинен змінюватися з часом, зі
          зміною порядку елементів або після оновлення сторінки.
        </li>
      </ul>
      <p className={css.note}>
        ІНФОРМАЦІЯ: <br />
        Індекси масиву унікальні, проте вони не стабільні – при перетасовуванні
        колекції ключі змінюються. Дата і час – унікальні, але не стабільні,
        оскільки постійно збільшуються. Таким чином, під час кожного рендеру
        створюються нові ключі. Використання випадкового числа рівносильно тому,
        що ключі взагалі не використовуються, оскільки випадкові числа не є
        унікальними або стабільними.
      </p>
      <p>
        Найкращий спосіб задати ключ – використовувати статичний рядок, який
        однозначно ідентифікує елемент списку серед інших. Найчастіше як ключі
        використовуються ідентифікатори об'єктів, створених базою даних, –
        постійне, незмінне значення. Але також підійде будь-яке унікальне
        значення якоїсь властивості об'єкта.
      </p>
      <pre className={css.code}>
        const&nbsp;favouriteBooks&nbsp;=&nbsp;[
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-1&quot;,&nbsp;name:&nbsp;&quot;JS&nbsp;for&nbsp;beginners&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-2&quot;,&nbsp;name:&nbsp;&quot;React&nbsp;basics&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-3&quot;,&nbsp;name:&nbsp;&quot;React&nbsp;Router&nbsp;overview&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;id:&nbsp;&quot;id-4&quot;,&nbsp;name:&nbsp;&quot;Redux&nbsp;in&nbsp;depth&quot;&nbsp;
        {'}'},
        <br />
        ];
        <br />
        <br />
        const&nbsp;BookList&nbsp;=&nbsp;({'{'}&nbsp;books&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;ul&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'{'}books.map(book&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;key={'{'}book.id{'}'}
        &gt;{'{'}book.name{'}'}&lt;/li&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
        <br />
        &nbsp;&nbsp;&lt;/ul&gt;
        <br />
        );
      </pre>
      <p>
        Якщо об'єкти масиву не мають унікальних значень властивостей і колекція
        не редагується, тобто у користувача немає можливості видалити або ще
        якось змінити порядок елементів, крім додавання нових, можна
        використовувати індекси масиву.
      </p>
      <pre className={css.code}>
        const&nbsp;favouriteBooks&nbsp;=&nbsp;[
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;name:&nbsp;&quot;JS&nbsp;for&nbsp;beginners&quot;&nbsp;{'}'},
        <br />
        &nbsp;&nbsp;{'{'}&nbsp;name:&nbsp;&quot;React&nbsp;basics&quot;&nbsp;
        {'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;name:&nbsp;&quot;React&nbsp;Router&nbsp;overview&quot;&nbsp;{'}'},
        <br />
        &nbsp;&nbsp;{'{'}
        &nbsp;name:&nbsp;&quot;Redux&nbsp;in&nbsp;depth&quot;&nbsp;{'}'},
        <br />
        ];
        <br />
        <br />
        const&nbsp;BookList&nbsp;=&nbsp;({'{'}&nbsp;books&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&lt;ul&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
        books.map((book,&nbsp;index)&nbsp;=&gt;&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;key={'{'}index{'}'}&gt;
        {'{'}book.name{'}'}&lt;/li&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;)){'}'}
        <br />
        &nbsp;&nbsp;&lt;/ul&gt;
        <br />
        );
      </pre>
      <p className={css.note}>
        ІНДЕКСИ ЯК КЛЮЧІ: <br />
        Використання індексів для ключів – це крайній випадок. В переважній
        більшості даних будуть унікальні ідентифікатори або будь-які інші
        властивості.
      </p>
      <h2>Додаткові матеріали</h2>
      <ul className={css.sectionList}>
        <li>
          <a href="https://react.dev/learn/rendering-lists">Списки і ключі</a>
        </li>
      </ul>
    </div>
  );
};

export default ReactAbstractOneCollections;

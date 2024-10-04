import css from '../../../../components/Layout.module.css';
import { IframeComponentTwo } from './iframes/iframes';
import { IframeComponentThree } from './iframes/iframes';

const ReactAbstractOneVanillaCSS = () => {
  return (
    <div>
      <h1>Ванільний CSS</h1>

      <p>
        Оформлення компонента можна винести до таблиці стилів. У цьому випадку
        стилі кожного компонента оголошуються в окремому CSS-файлі з розширенням
        .css. Ім'я файлу складається з імені компонента та розширення.
        Наприклад, для компонента Alert, файл стилів буде називатися Alert.css.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          .alert&nbsp;{'{'}
          <br />
           &nbsp;margin:&nbsp;8px;
          <br />
           &nbsp;padding:&nbsp;12px&nbsp;16px;
          <br />
           &nbsp;border-radius:&nbsp;4px;
          <br />
           &nbsp;background-color:&nbsp;gray;
          <br />
           &nbsp;color:&nbsp;white;
          <br />
          {'}'}
        </pre>
      </div>
      {/* ----------- */}

      <p className={css.note}>
        ЦЕ ЗВИЧАЙНИЙ CSS: <br />
        Всередині файлу стилів можна написати будь-який валідний CSS код.
        Хорошою практикою буде писати CSS тільки для HTML-розмітки компонента до
        якого належить цей файл стилів.
      </p>
      <p>
        Стилі компонента імпортуються у файл оголошення, після чого CSS-класи
        описані у таблиці стилів доступні для використання. У React
        HTML-атрибуту class відповідає JSX-атрибут className, куди можна
        передати рядок з перерахуванням усіх класів елемента.
      </p>
      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;&quot;./Alert.css&quot;;
          <br />
          <br />
          const&nbsp;Alert&nbsp;=&nbsp;({'{'}&nbsp;children&nbsp;{'}'}
          )&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;&lt;p&nbsp;className=&quot;alert&quot;&gt;{'{'}
          children{'}'}&lt;/p&gt;;
          <br />
          {'}'};
        </pre>
      </div>
      {/* ----------- */}

      <p className={css.note}>
        АВТОМАТИЗАЦІЯ: <br />
        На стадії збирання проекту Create React App мінімізує CSS та автоматично
        додає вендорні префікси використовуючи Autoprefixer. Сучасний синтаксис
        та можливості CSS покриваються поліфілами для можливості підтримки
        старих браузерів. Тому розробнику не потрібно турбуватися про це.
      </p>
      <h2>Композиція класів</h2>
      <p>
        Додамо CSS класи для кожного типу оповіщення, щоб контролювати колір
        фону абзацу в залежності від значення пропсу variant. Для зручності
        назвемо класи аналогічно варіантам значення пропсу.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          .alert&nbsp;{'{'}
          <br />
           &nbsp;margin:&nbsp;8px;
          <br />
           &nbsp;padding:&nbsp;12px&nbsp;16px;
          <br />
           &nbsp;border-radius:&nbsp;4px;
          <br />
           &nbsp;color:&nbsp;white;
          <br />
          {'}'}
          <br />
          <br />
          .alert.info&nbsp;{'{'}
          <br />
           &nbsp;background-color:&nbsp;blue;
          <br />
          {'}'}
          <br />
          <br />
          .alert.success&nbsp;{'{'}
          <br />
           &nbsp;background-color:&nbsp;green;
          <br />
          {'}'}
          <br />
          <br />
          .alert.error&nbsp;{'{'}
          <br />
           &nbsp;background-color:&nbsp;red;
          <br />
          {'}'}
          <br />
          <br />
          .alert.warning&nbsp;{'{'}
          <br />
           &nbsp;background-color:&nbsp;orange;
          <br />
          {'}'}
        </pre>
      </div>
      {/* ----------- */}

      <p>
        Додамо компоненту Alert два необов'язкові пропси outlined та elevated.
        Їх значеннями можуть бути тільки true, false або undefined. Якщо
        значення цих пропсів true, будемо додавати елементу &lt;p&gt; класи
        is-outlined та is-elevated.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          {'/*'}&nbsp;Весь&nbsp;попередній&nbsp;CSS&nbsp;код&nbsp;*/
          <br />
          <br />
          .alert.is-outlined&nbsp;{'{'}
          <br />
           &nbsp;outline:&nbsp;1px&nbsp;solid&nbsp;black;
          <br />
          {'}'}
          <br />
          <br />
          .alert.is-elevated&nbsp;{'{'}
          <br />
           &nbsp;box-shadow:&nbsp;rgb(0&nbsp;0&nbsp;0&nbsp;/&nbsp;20%)&nbsp;0px&nbsp;3px&nbsp;3px&nbsp;-2px,&nbsp;rgb(0&nbsp;0&nbsp;0&nbsp;/&nbsp;14%)&nbsp;0px&nbsp;3px&nbsp;4px&nbsp;0px,
          <br />
           &nbsp; &nbsp;rgb(0&nbsp;0&nbsp;0&nbsp;/&nbsp;12%)&nbsp;0px&nbsp;1px&nbsp;8px&nbsp;0px;
          <br />
          {'}'}
        </pre>
      </div>
      {/* ----------- */}

      <p>
        Процес обчислення фінального значення атрибуту className залежить від
        розробника та поточного завдання. Наприклад, використовуємо масив рядків
        та блок if. Класи alert і якийсь із варіантів буде завжди, а класи для
        пропсів elevated та outlined додаємо тільки за потребою.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;&quot;./Alert.css&quot;;
          <br />
          <br />
          const&nbsp;Alert&nbsp;=&nbsp;({'{'}
          &nbsp;variant,&nbsp;outlined,&nbsp;elevated,&nbsp;children&nbsp;{'}'}
          )&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;const&nbsp;classNames&nbsp;=&nbsp;[&quot;alert&quot;,&nbsp;variant];
          <br />
           &nbsp;if&nbsp;(outlined)&nbsp;classNames.push(&quot;is-outlined&quot;);
          <br />
           &nbsp;if&nbsp;(elevated)&nbsp;classNames.push(&quot;is-elevated&quot;);
          <br />
          <br />
           &nbsp;return&nbsp;&lt;p&nbsp;className={'{'}
          classNames.join(&quot;&nbsp;&quot;){'}'}&gt;{'{'}children{'}'}
          &lt;/p&gt;;
          <br />
          {'}'};
        </pre>
      </div>
      {/* ----------- */}

      <p>
        Розберіть код живого прикладу, в якому використовується весь матеріал,
        який ми з вами розібрали до цього моменту.
      </p>

      <div className={css.codepen}>
        <IframeComponentTwo />
      </div>

      <p className={css.note}>
        СТАНДАРТУ НЕМАЄ: <br />
        Для обчислення фінального значення атрибуту className можна було
        використати блок if...else, інструкцію switch, тернарний оператор або
        будь-який інший синтаксис JavaScript, який дасть нам той же результат.
        Головне, щоб рядок з класами був складений правильно і не мав зайвих чи
        невалідних значень.
      </p>
      <h2>Бібліотека clsx</h2>
      <p>
        Для вирішення більшості завдань, пов'язаних з безліччю класів, що
        задаються згідно з певними умовами, використовують бібліотеку{' '}
        <a href="https://www.npmjs.com/package/clsx">clsx</a> . Звичайно,
        JavaScript надає багатий синтаксис, але здебільшого пишуться
        непродуктивні рішення або код, що погано читається. Бібліотека
        стандартизує цей процес і робить його більш зручним за рахунок
        продуманого синтаксису.
      </p>
      <p className={css.code}>npm install clsx</p>
      <p>
        Функції clsx можна передати список виразів як набір аргументів. Вирази
        що приводяться до true, результат яких це рядок або число, буде додано у
        фінальний рядок класів.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;clsx&nbsp;from&nbsp;&quot;clsx&quot;;
          <br />
          <br />
          const&nbsp;className&nbsp;=&nbsp;clsx(
          <br />
           &nbsp;&quot;first&quot;,
          <br />
           &nbsp;10,
          <br />
           &nbsp;undefined&nbsp;&amp;&amp;&nbsp;&quot;second&quot;,
          <br />
           &nbsp;true&nbsp;&amp;&amp;&nbsp;&quot;third&quot;,
          <br />
           &nbsp;false&nbsp;?&nbsp;&quot;fourth&quot;&nbsp;:&nbsp;&quot;fifth&quot;
          <br />
          );
          <br />
          console.log(className);&nbsp;//&nbsp;&quot;first&nbsp;10&nbsp;third&nbsp;fifth&quot;
        </pre>
      </div>
      {/* ----------- */}

      <p>
        Ось як виглядатиме код компонента Alert використовуючи бібліотеку clsx.
        Навіть у такому, відносно простому випадку, код виходить простіше і
        читабельніше.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;clsx&nbsp;from&nbsp;&quot;clsx&quot;;
          <br />
          import&nbsp;&quot;./Alert.css&quot;;
          <br />
          <br />
          const&nbsp;Alert&nbsp;=&nbsp;({'{'}
          &nbsp;variant,&nbsp;outlined,&nbsp;elevated,&nbsp;children&nbsp;{'}'}
          )&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;p
          <br />
           &nbsp; &nbsp; &nbsp;className={'{'}clsx(
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;&quot;alert&quot;,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;variant,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;outlined&nbsp;&amp;&amp;&nbsp;&quot;is-outlined&quot;,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;elevated&nbsp;&amp;&amp;&nbsp;&quot;is-elevated&quot;
          <br />
           &nbsp; &nbsp; &nbsp;){'}'}
          <br />
           &nbsp; &nbsp;&gt;
          <br />
           &nbsp; &nbsp; &nbsp;{'{'}children{'}'}
          <br />
           &nbsp; &nbsp;&lt;/p&gt;
          <br />
           &nbsp;);
          <br />
          {'}'};
        </pre>
      </div>
      {/* ----------- */}

      <p>
        Можна комбінувати варіативну та об'єктну форму функції clsx. Спочатку
        передаються класи, які будуть завжди, після чого в об'єкті налаштувань
        перераховуємо динамічні значення класів залежно від якихось обчислень.
      </p>
      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;clsx&nbsp;from&nbsp;&quot;clsx&quot;;
          <br />
          import&nbsp;&quot;./Alert.css&quot;;
          <br />
          <br />
          const&nbsp;Alert&nbsp;=&nbsp;({'{'}
          &nbsp;variant,&nbsp;outlined,&nbsp;elevated,&nbsp;children&nbsp;{'}'}
          )&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;p
          <br />
           &nbsp; &nbsp; &nbsp;className={'{'}
          clsx(&quot;alert&quot;,&nbsp;variant,&nbsp;{'{'}
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;&quot;is-outlined&quot;:&nbsp;outlined,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;&quot;is-elevated&quot;:&nbsp;elevated,
          <br />
           &nbsp; &nbsp; &nbsp;{'}'}){'}'}
          <br />
           &nbsp; &nbsp;&gt;
          <br />
           &nbsp; &nbsp; &nbsp;{'{'}children{'}'}
          <br />
           &nbsp; &nbsp;&lt;/p&gt;
          <br />
           &nbsp;);
          <br />
          {'}'};
        </pre>
      </div>
      {/* ----------- */}
      <p>
        Розберіть код живого прикладу, в якому використовується весь матеріал,
        який ми з вами розібрали до цього моменту.
      </p>

      <div className={css.codepen}>
        <IframeComponentThree />
      </div>

      <h2>Глобальний простір імен</h2>
      <p>
        Імпорт стилів компонента саме у файл його оголошення це просто гарна
        практика. Наприклад, якщо зробити імпорт стилів Alert.css у компоненті
        App, то нічого не зламається. В результаті імпорту весь оголошений CSS
        код файлу просто додається в одну загальну таблицю стилів, разом з усім
        іншим CSS кодом проекту з інших компонентів.
      </p>
      <p>
        У коді прикладу буде проблема конфлікту CSS правил із селектором класу
        .text. Залежно від порядку імпорту цих двох CSS файлів у додатку
        фінальні стилі класу text можуть виглядати по-різному.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          {'/*'}&nbsp;FirstComponent.css&nbsp;{'*/'}
          <br />
          .text&nbsp;{'{'}
          <br />
          &nbsp;&nbsp;color:&nbsp;red;
          <br />
          &nbsp;&nbsp;font-size:&nbsp;24px;
          <br />
          {'}'}
          <br />
          <br />
          {'/*'}&nbsp;SecondComponent.css&nbsp;{'*/'}
          <br />
          .text&nbsp;{'{'}
          <br />
          &nbsp;&nbsp;color:&nbsp;blue;
          <br />
          {'}'}
        </pre>
      </div>
      {/* ----------- */}

      <p className={css.note}>
        УНІКАЛЬНІСТЬ ІМЕН: <br />
        Імена селекторів класу повинні бути унікальними у всьому додатку, щоб не
        було конфліктів CSS правил з однаковими селекторами у різних
        компонентах.
      </p>
      <h2>Препроцесори</h2>
      <p>
        Використовувати препроцесори можна, але можливість композиції
        компонентів робить їх менш корисними, оскільки замінює такі концепції як
        домішки, функції, вкладеність та інші. Не рекомендується використовувати
        одні й ті самі CSS-класи в різних компонентах, для цього є композиція
        компонентів.
      </p>
      <p>
      Наприклад, замість використання базового CSS-класу .button у компонентах &lt;LoginButton&gt; та &lt;FollowButton&gt;, краще створити компонент &lt;Button&gt; зі своїми власними стилями, які можуть відображатись у кількох варіантах. Тоді компоненти &lt;LoginButton&gt; та &lt;FollowButton&gt; можуть використовувати компонент &lt;Button&gt;, а не просто CSS-клас.
      </p>

      {/* ----------- */}
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          {'//'}&nbsp;Button.js
          <br />
          const&nbsp;Button&nbsp;=&nbsp;({'{'}&nbsp;variant,&nbsp;children&nbsp;
          {'}'})&nbsp;=&gt;&nbsp;{'{'}
          <br />
          {'//'}
          &nbsp;Базові&nbsp;стилі&nbsp;кнопки&nbsp;з&nbsp;кількома&nbsp;варіантами&nbsp;відображення
          <br />
          &nbsp;&nbsp;return&nbsp;&lt;button&nbsp;className={'{'}
          clsx(&quot;button&quot;,&nbsp;variant){'}'}&gt;{'{'}children{'}'}
          &lt;/button&gt;;
          <br />
          {'}'};
          <br />
          <br />
          {'//'}&nbsp;LoginButton.js
          <br />
          const&nbsp;LoginButton&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
          <br />
          {'//'}&nbsp;Унікальна&nbsp;логіка&nbsp;кнопки&nbsp;логіна
          <br />
          &nbsp;&nbsp;return&nbsp;&lt;Button&nbsp;variant=&quot;primary&quot;&gt;Login&lt;/Button&gt;;
          <br />
          {'}'};
          <br />
          <br />
          {'//'}&nbsp;FollowButton.js
          <br />
          const&nbsp;FollowButton&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
          <br />
          {'//'}&nbsp;Унікальна&nbsp;логіка&nbsp;кнопки&nbsp;підписки
          <br />
          &nbsp;&nbsp;return&nbsp;&lt;Button&nbsp;variant=&quot;secondary&quot;&gt;Follow&lt;/Button&gt;;
          <br />
          {'}'};
        </pre>
      </div>
      {/* ----------- */}

      <p>
        Правила іменування файлів такі ж, як і для ванільного CSS, відрізняється
        тільки розширення, наприклад .scss для SASS. В іншому у препроцесорів ті
        ж можливості, концепції та недоліки, що і у ванільного CSS. Для того щоб
        додати можливість використання SASS, встановіть його компілятор у
        проект.
      </p>

      <pre className={css.code}>npm install sass</pre>

      <h2>Висновок</h2>
      <p>
        Використання ванільного CSS теж не найкращий підхід і має ряд недоліків,
        особливо у великих проектах.
      </p>
      <ul className={css.sectionList}>
        <li>Слабка масштабованість</li>
        <li>Обмежене повторне використання стилів</li>
        <li>
          Для динамічних значень необхідно використовувати вбудовані стилі
        </li>
        <li>Проблема глобального простору імен</li>
        <li>
          Необхідність використовувати якусь конвенцію іменування селекторів
          класу
        </li>
        <li>
          Відсутність автоматичного видалення коду, що не використовується.
        </li>
      </ul>
    </div>
  );
};

export default ReactAbstractOneVanillaCSS;

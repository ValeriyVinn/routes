import css from '../../../../components/Layout.module.css';
import {IframeComponentOne} from './iframes/iframes';

const ReactAbstractOneInlineStyles = () => {
  return (
    <div>
      <h1>Вбудовані стилі</h1>

      <p>
        Існує кілька способів стилізації компонентів, найпростіший, але в той же
        час найбільш обмежений – це вбудовані стилі. Для цього використовується
        атрибут style, який у React приймає не рядок, а об'єкт стилів.
      </p>
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;p
          <br />
           &nbsp; &nbsp; &nbsp;style={'{'}
          {'{'}
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;margin:&nbsp;8,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;padding:&nbsp;&quot;12px&nbsp;16px&quot;,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;borderRadius:&nbsp;4,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;backgroundColor:&nbsp;&quot;gray&quot;,
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;color:&nbsp;&quot;white&quot;,
          <br />
           &nbsp; &nbsp; &nbsp;{'}'}
          {'}'}
          <br />
           &nbsp; &nbsp;&gt;
          <br />
           &nbsp; &nbsp; &nbsp;Please&nbsp;update&nbsp;your&nbsp;email!
          <br />
           &nbsp; &nbsp;&lt;/p&gt;
          <br />
           &nbsp;);
          <br />
          {'}'};
        </pre>
      </div>

      <p>
        З прикладу можна виділити кілька обов'язкових правил вбудованих стилів:
      </p>
      <ul className={css.sectionList}>
        <li>
          Імена властивостей, що складаються з двох і більше слів, наприклад
          background-color, обов'язково повинні бути записані в camelCase
          нотації (backgroundColor), як при зверненні до властивостей об'єкта
          style у DOM-елемента.
        </li>
        <li>
          До числових значень більшості властивостей буде автоматично додано
          суфікс px. Якщо необхідно використовувати одиниці відмінні від px, або
          значення складається з кількох частин, воно вказується як рядок.
        </li>
      </ul>
      <p>
        Винесемо об'єкт стилів у змінну, щоб підвищити читабельність JSX
        розмітки.
      </p>

      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          const&nbsp;alertStyles&nbsp;=&nbsp;{'{'}
          <br />
           &nbsp;margin:&nbsp;8,
          <br />
           &nbsp;padding:&nbsp;&quot;12px&nbsp;16px&quot;,
          <br />
           &nbsp;borderRadius:&nbsp;4,
          <br />
           &nbsp;backgroundColor:&nbsp;&quot;gray&quot;,
          <br />
           &nbsp;color:&nbsp;&quot;white&quot;,
          <br />
          {'}'};
          <br />
          <br />
          <br />
          const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;p&nbsp;style={'{'}alertStyles{'}'}
          &gt;Please&nbsp;update&nbsp;your&nbsp;email!&lt;/p&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;p&nbsp;style={'{'}alertStyles{'}'}
          &gt;There&nbsp;was&nbsp;an&nbsp;error&nbsp;during&nbsp;transaction!&lt;/p&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;p&nbsp;style={'{'}alertStyles{'}'}
          &gt;Payment&nbsp;received,&nbsp;thank&nbsp;you&nbsp;for&nbsp;your&nbsp;purchase!&lt;/p&gt;
          <br />
           &nbsp; &nbsp;&lt;/&gt;
          <br />
           &nbsp;);
          <br />
          {'}'};
        </pre>
      </div>

      <p>
        Створимо компонент Alert який буде рендерувати абзац тексту та приховає
        у собі майбутню логіку вибору кольору фону.
      </p>

      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          const&nbsp;alertStyles&nbsp;=&nbsp;{'{'}
          <br />
           &nbsp;margin:&nbsp;8,
          <br />
           &nbsp;padding:&nbsp;&quot;12px&nbsp;16px&quot;,
          <br />
           &nbsp;borderRadius:&nbsp;4,
          <br />
           &nbsp;backgroundColor:&nbsp;&quot;gray&quot;,
          <br />
           &nbsp;color:&nbsp;&quot;white&quot;,
          <br />
          {'}'};
          <br />
          <br />
          <br />
          export&nbsp;const&nbsp;Alert&nbsp;=&nbsp;({'{'}&nbsp;children&nbsp;
          {'}'})&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;&lt;p&nbsp;style={'{'}alertStyles{'}'}&gt;{'{'}
          children{'}'}&lt;/p&gt;;
          <br />
          {'}'};
        </pre>
      </div>

      <p>Використовуємо компонент Alert для рендеру декількох повідомлень.</p>

      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;{'{'}&nbsp;Alert&nbsp;{'}'}
          &nbsp;from&nbsp;&quot;./Alert&quot;;
          <br />
          <br />
          <br />
          const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&gt;Please&nbsp;update&nbsp;your&nbsp;email!&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&gt;There&nbsp;was&nbsp;an&nbsp;error&nbsp;during&nbsp;transaction!&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&gt;Payment&nbsp;received,&nbsp;thank&nbsp;you&nbsp;for&nbsp;your&nbsp;purchase!&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp;&lt;/&gt;
          <br />
           &nbsp;);
          <br />
          {'}'};
        </pre>
      </div>

      <p>
        Зробимо так, щоб залежно від типу оповіщення, у компоненті Alert
        змінювався колір фону абзацу. Для цього додамо йому обов'язковий пропс
        variant з кількома можливими значеннями.
      </p>
      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          import&nbsp;{'{'}&nbsp;Alert&nbsp;{'}'}
          &nbsp;from&nbsp;&quot;./Alert&quot;;
          <br />
          <br />
          <br />
          const&nbsp;App&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&nbsp;variant=&quot;info&quot;&gt;
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;Would&nbsp;you&nbsp;like&nbsp;to&nbsp;browse&nbsp;our&nbsp;recommended&nbsp;products?
          <br />
           &nbsp; &nbsp; &nbsp;&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&nbsp;variant=&quot;error&quot;&gt;
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;There&nbsp;was&nbsp;an&nbsp;error&nbsp;during&nbsp;your&nbsp;last&nbsp;transaction
          <br />
           &nbsp; &nbsp; &nbsp;&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&nbsp;variant=&quot;success&quot;&gt;
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;Payment&nbsp;received,&nbsp;thank&nbsp;you&nbsp;for&nbsp;your&nbsp;purchase
          <br />
           &nbsp; &nbsp; &nbsp;&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp; &nbsp;&lt;Alert&nbsp;variant=&quot;warning&quot;&gt;
          <br />
           &nbsp; &nbsp; &nbsp; &nbsp;Please&nbsp;update&nbsp;your&nbsp;profile&nbsp;contact&nbsp;information
          <br />
           &nbsp; &nbsp; &nbsp;&lt;/Alert&gt;
          <br />
           &nbsp; &nbsp;&lt;/&gt;
          <br />
           &nbsp;);
          <br />
          {'}'};
        </pre>
      </div>

      <p>
        Логіку вибору кольору винесемо у функцію getBgColor(variant), яка буде
        повертати рядок із назвою кольору залежно від значення параметра
        variant.
      </p>

      <div className={css.tabs}>
        <button className={css.tabButton}>src/components/App.js</button>
      </div>

      <div>
        <pre className={css.code}>
          const&nbsp;alertStyles&nbsp;=&nbsp;{'{'}
          <br />
           &nbsp;margin:&nbsp;8,
          <br />
           &nbsp;padding:&nbsp;&quot;12px&nbsp;16px&quot;,
          <br />
           &nbsp;borderRadius:&nbsp;4,
          <br />
           &nbsp;color:&nbsp;&quot;white&quot;,
          <br />
          {'}'};
          <br />
          <br />
          <br />
          const&nbsp;getBgColor&nbsp;=&nbsp;variant&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;switch&nbsp;(variant)&nbsp;{'{'}
          <br />
           &nbsp; &nbsp;case&nbsp;&quot;info&quot;:
          <br />
           &nbsp; &nbsp; &nbsp;return&nbsp;&quot;blue&quot;;
          <br />
           &nbsp; &nbsp;case&nbsp;&quot;success&quot;:
          <br />
           &nbsp; &nbsp; &nbsp;return&nbsp;&quot;green&quot;;
          <br />
           &nbsp; &nbsp;case&nbsp;&quot;error&quot;:
          <br />
           &nbsp; &nbsp; &nbsp;return&nbsp;&quot;red&quot;;
          <br />
           &nbsp; &nbsp;case&nbsp;&quot;warning&quot;:
          <br />
           &nbsp; &nbsp; &nbsp;return&nbsp;&quot;orange&quot;;
          <br />
           &nbsp; &nbsp;default:
          <br />
           &nbsp; &nbsp; &nbsp;throw&nbsp;new&nbsp;Error(&#96;Unsupported&nbsp;variant&nbsp;prop&nbsp;value&nbsp;-&nbsp;$
          {'{'}variant{'}'}&#96;);
          <br />
           &nbsp;{'}'}
          <br />
          {'}'};
          <br />
          <br />
          <br />
          export&nbsp;const&nbsp;Alert&nbsp;=&nbsp;({'{'}
          &nbsp;variant,&nbsp;children&nbsp;{'}'})&nbsp;=&gt;&nbsp;{'{'}
          <br />
           &nbsp;return&nbsp;(
          <br />
           &nbsp; &nbsp;&lt;p&nbsp;style={'{'}
          {'{'}
          &nbsp;...alertStyles,&nbsp;backgroundColor:&nbsp;getBgColor(variant)&nbsp;
          {'}'}
          {'}'}&gt;
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

      <p className={css.note}>
        ДИНАМІЧНІ СТИЛІ: <br />
        На 25-му рядку прикладу відбувається створення фінального значення
        атрибуту style - базові стилі з alertStyles та динамічне значення
        backgroundColor залежно від пропсу variant. Такий підхід застосовується
        у разі коли значення однієї і більше властивостей залежить від пропсів.
        Наприклад, якщо посилання на зображення для background-image передається
        як пропс.
      </p>
      <p>
        Розберіть код живого прикладу в якому використовується матеріал, який ми
        розібрали до цього моменту.
      </p>

      <div className={css.codepen}>
        <IframeComponentOne />
      </div>
      <p>
        Вбудовані стилі можуть видаватися зручними через простоту використання,
        але вони мають ряд істотних недоліків.
      </p>
      <ul className={css.sectionList}>
        <li>Дуже слабка масштабованість та повторне використання стилів</li>
        <li>
          Обмежені можливості (псевдокласи, псевдоелементи, адаптивні
          властивості)
        </li>
        <li>
          Погана продуктивність при відмальовуванні досить великої кількості
          елементів
        </li>
        <li>Відсутність зручних інструментів розробника</li>
        <li>
          Немає підтримки в популярних інструментах, наприклад autoprefixer
        </li>
      </ul>
      <p className={css.note}>
        ВИСНОВОК: <br />
        На практиці вбудовані стилі використовуються тільки для динамічно
        обчислюваних значень властивостей, у парі із зовнішніми таблицями
        стилів. В якості основного способу стилізації компонентів вбудовані
        стилі не використовуються в проектах та тому не рекомендуються.
      </p>
    </div>
  );
};

export default ReactAbstractOneInlineStyles;

import css from '../../../../components/Layout.module.css';

const ReactAbstractOneRenderByCondition = () => {
  return (
    <div>
      <h1>Рендер за умовою</h1>
      <p>
        Для рендеру розмітки за умовою використовуються оператори розгалужень та
        умов. Умови можна перевіряти перед поверненням розмітки або прямо в JSX.
      </p>
      <p className={css.note}>
        ІНФОРМАЦІЯ: <br />
        Якщо за умовою нічого не повинно бути відрендерено, можна повернути
        null, undefined або false, вони не рендеряться.
      </p>
      <h2>if за допомогою логічного оператора &&</h2>
      <p>Читається як: якщо умова приводиться до true, то рендерим розмітку.</p>
      <pre className={css.code}>
        const&nbsp;Mailbox&nbsp;=&nbsp;({'{'}&nbsp;unreadMessages&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;{'{'}
        <br />
        &nbsp;&nbsp;return&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello!&lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
        unreadMessages.length&nbsp;&gt;&nbsp;0&nbsp;&amp;&amp;&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;You&nbsp;have&nbsp;
        {'{'}unreadMessages.length{'}'}&nbsp;unread&nbsp;messages.&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'}'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
        <br />
        &nbsp;&nbsp;);
        <br />
        {'}'};
      </pre>
      <h2>if...else за допомогою тернарного оператора</h2>
      <p>
        Читається як: якщо умова приводиться до true, рендерим розмітку після ?,
        інакше – рендерим розмітку після :.
      </p>
      <pre className={css.code}>
        const&nbsp;Mailbox&nbsp;=&nbsp;({'{'}
        &nbsp;username,&nbsp;unreadMessages&nbsp;{'}'})&nbsp;=&gt;&nbsp;{'{'}
        <br />
        &nbsp;&nbsp;return&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello&nbsp;{'{'}username
        {'}'}&lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
        unreadMessages.length&nbsp;&gt;&nbsp;0&nbsp;?&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;You&nbsp;have&nbsp;
        {'{'}unreadMessages.length{'}'}&nbsp;unread&nbsp;messages.&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;:&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;No&nbsp;unread&nbsp;messages.&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'}'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
        <br />
        &nbsp;&nbsp;);
        <br />
        {'}'};
      </pre>
      <p>
        Останній приклад можна записати по-іншому, результат буде однаковий.
      </p>
      <pre className={css.code}>
        const&nbsp;Mailbox&nbsp;=&nbsp;({'{'}
        &nbsp;name,&nbsp;unreadMessages&nbsp;{'}'})&nbsp;=&gt;&nbsp;{'{'}
        <br />
        &nbsp;&nbsp;return&nbsp;(
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello&nbsp;{'{'}name{'}'}
        &lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}
        unreadMessages.length&nbsp;&gt;&nbsp;0
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;&#96;You&nbsp;have&nbsp;$
        {'{'}unreadMessages.length{'}'}&nbsp;unread&nbsp;messages.&#96;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&quot;No&nbsp;unread&nbsp;messages.&quot;
        {'}'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
        <br />
        &nbsp;&nbsp;);
        <br />
        {'}'};
      </pre>
      <p>Нехай у компоненті продукту ще є його доступна кількість.</p>
      <pre className={css.code}>
        const&nbsp;Product&nbsp;=&nbsp;({'{'}
        &nbsp;imgUrl,&nbsp;name,&nbsp;price,&nbsp;quantity&nbsp;{'}'}
        )&nbsp;=&gt;&nbsp;(
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
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Quantity:&nbsp;{'{'}
        quantity&nbsp;&lt;&nbsp;20&nbsp;?&nbsp;&quot;Few&nbsp;left&quot;&nbsp;:&nbsp;&quot;In&nbsp;stock&quot;
        {'}'}&lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&gt;Add&nbsp;to&nbsp;cart&lt;/button&gt;
        <br />
        &nbsp;&nbsp;&lt;/div&gt;
        <br />
        );
      </pre>
      <h3>Додаткові матеріали</h3>
      <ul className={css.sectionList}>
        <li>
          <a href="https://react.dev/learn/conditional-rendering">
            Умовний рендеринг
          </a>
        </li>
        <li>
          <a href="https://www.robinwieruch.de/conditional-rendering-react/">
            All the Conditional Renderings in React
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ReactAbstractOneRenderByCondition;

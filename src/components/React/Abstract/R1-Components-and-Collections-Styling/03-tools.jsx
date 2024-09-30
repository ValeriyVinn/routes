import css from '../../../../components/Layout.module.css';

const ReactAbstractOneTools = () => {
  return (
    <div>
      <h1>Інструменти</h1>
      <p>
        Для створення React-застосунку необхідні Node.js, Webpack, Babel, React
        і DevTools. Можна написати свою Webpack-збірку або взяти будь-яку хорошу
        з GitHub.
      </p>
      <h2>Create React App</h2>
      <p>
        Для навчання та маленьких/середніх проектів рекомендується
        використовувати утиліту від авторів React.
      </p>
      <ul className={css.sectionList}>
        <li>
          Абстрагує всю конфігурацію, дозволяючи зосередитись на написанні коду
        </li>
        <li>Включає необхідні інструменти: Webpack, Babel, ESLint тощо.</li>
        <li>Розширюється додатковими пакетами з екосистеми React</li>
        <li>
          Має функцію вилучення, яка видаляє абстракцію і відкриває конфігурацію
        </li>
      </ul>
      <pre className={css.code}>npx create-react-app ім'я_папки_проекту</pre>
      <p className={css.note}>
        ІНФОРМАЦІЯ: <br />
        Щоб створити застосунок у поточній папці, замість імені проекту
        ставиться крапка. Наприклад npx create-react-app .. Це можна
        використовувати, коли був склонований репозиторій, і в його локальній
        версії ініціалізується застосунок.
      </p>
      <p>
        <b>npx</b> — інструмент, призначений для того, щоб допомогти
        стандартизувати використання npm-пакетів. Постачається з npm версії
        5.2.0 та вище. npm спрощує встановлення та керування залежностями,
        розміщеними в реєстрі, a npx спрощує використання CLI-утиліт та інших
        файлів, що виконуються, без необхідності їх встановлення в систему або
        проект.
      </p>
      <a href="https://create-react-app.dev/">Документація Create React App</a>
      <h2>React DevTools</h2>
      <p>
        В інструментах розробника можна подивитися на дерево компонентів, їх
        стан та пропси. Профайлер корисний під час оптимізації застосунку.
      </p>
      <ul className={css.sectionList}>
        <li>
          <a href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1">
            Devtools в Chrome Web Store
          </a>
        </li>
        <li>
          <a href="https://legacy.reactjs.org/blog/2019/08/15/new-react-devtools.html">
            Introducing the New React DevTools
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ReactAbstractOneTools;

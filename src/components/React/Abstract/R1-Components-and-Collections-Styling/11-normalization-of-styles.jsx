import css from '../../../../components/Layout.module.css';



const ReactAbstractOneNormalization = () => {
    return ( <div>
        <h1>Нормалізація стилів</h1>


        <p>Стилі елементів можуть відрізнятись між браузерами. Для того, щоб привести їх до стандартного вигляду, необхідно додати набір правил, що виправляє відмінності у стилях елементів між браузерами, наскільки це можливо.</p>
<p>У Create React App вбудована можливість використовувати <a href="https://github.com/csstools/postcss-normalize">PostCSS Normalize</a>  - суміш кількох популярних таблиць стилів ( <a href="https://github.com/csstools/normalize.css">normalize.css</a>   та <a href="https://github.com/csstools/sanitize.css">sanitize.css</a>) з найкращими практиками нормалізації. Все, що необхідно зробити - це додати директиву @import-normalize; у будь-якому місці файлу стилів або CSS-модуля. Повторюючі імпорти будуть автоматично видалені, тому достатньо додати директиву до одного файлу стилів, наприклад index.css.</p>
<div className={css.tabs}>
        <button className={css.tabButton}>src/index.css</button>
      </div>

<div>
        <pre className={css.code}>
 @import-normalize;
<br />
<br />
{'/*'} Решта стилів файлів {'*/'}
</pre>
      </div>
<p className={css.note}>НАЛАШТУВАННЯ VSCODE: <br />
Якщо у VSCode ви бачите попередження «Unknown at rule @import-normalize css(unknownAtRules)», змініть у редакторі значення налаштування css.lint.unknownAtRules на ignore.</p>
<p>Залишилось імпортувати файл стилів index.css з підключеною нормалізацією в JavaScript модуль, наприклад в кореневий файл програми index.js або у файл компонента App.js.</p>
<div className={css.tabs}>
        <button className={css.tabButton}>src/index.js</button>
      </div>

      <div>
        <pre className={css.code}>
import "./index.css";
<br />
<br />
{'/*'} Решта стилів файлів {'*/'}
</pre>
      </div>
<p>Крім стандартизації зовнішнього вигляду елементів може бути корисно скинути або додати деякі глобальні стилі елементів. Наприклад, відступи списків та заголовків, стилі зображень, стилі елемента &lt;body&gt; і тому подібне. Буде логічно зробити це в тому ж файлі, в якому додавалася нормалізація.</p>
<div className={css.tabs}>
        <button className={css.tabButton}>src/index.css</button>
      </div>

      <div>
        <pre className={css.code}>
@import-normalize;
<br/>
<br/>body&nbsp;{'{'}
<br/> font-family:&nbsp;sans-serif;
<br/> line-height:&nbsp;1.5;
<br/>{'}'}
<br/>
<br/>h1,
<br/>h2,
<br/>h3,
<br/>h4,
<br/>h5,
<br/>h6,
<br/>p&nbsp;{'{'}
<br/> margin:&nbsp;0;
<br/>{'}'}
<br/>
<br/>ul,
<br/>ol&nbsp;{'{'}
<br/> margin:&nbsp;0;
<br/> padding:&nbsp;0;
<br/>{'}'}
<br/>
<br/>img&nbsp;{'{'}
<br/> display:&nbsp;block;
<br/> max-width:&nbsp;100%;
<br/> height:&nbsp;auto;
<br/>{'}'}
</pre>
      </div>   
    </div>
    
    ) 
    
    }
    
    export default ReactAbstractOneNormalization
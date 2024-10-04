import css from '../../../../components/Layout.module.css';
import { IframeComponentFour } from './iframes/iframes';
import { IframeComponentFive } from './iframes/iframes';


const ReactAbstractOneCSSModules = () => {
    return ( <div>
        <h1>CSS-модулі</h1>

<p>CSS-модулі - це не офіційна специфікація, вони не імплементовані в браузери. Це процес, що запускається на стадії складання проекту (наприклад, за допомогою Webpack), в результаті виконання якого імена класів замінюються на унікальні. Це дозволяє використовувати одне і те ж ім'я класу в різних CSS-файлах, не турбуючись про конфлікти імен. Цей підхід був розроблений, щоб вирішити проблему глобальної області видимості в CSS.</p>
<p>Create React App за замовчуванням підтримує CSS-модулі, все, що необхідно зробити це створювати файли стилів з розширенням .module.css, наприклад Alert.module.css. Всередині модуля CSS можна використовувати будь-який валідний CSS.</p>  

{/* ----------- */}
<div className={css.tabs}>
        <button className={css.tabButton}>src/components/Alert.module.css</button>
      </div>

      <div>
        <pre className={css.code}>
.alert&nbsp;{'{'}
<br/> &nbsp;margin:&nbsp;8px;
<br/> &nbsp;padding:&nbsp;12px&nbsp;16px;
<br/> &nbsp;border-radius:&nbsp;4px;
<br/> &nbsp;background-color:&nbsp;gray;
<br/> &nbsp;color:&nbsp;white;
<br/>{'}'}
</pre>
      </div>
{/* ----------- */}

<p className={css.note}>ТРОХИ ГЛИБШЕ: <br />
Хоча CSS-модуль виглядає як звичайний CSS, насправді він компілюється у формат, що називається ICSS (Interoperable CSS), який призначений для розробників інструментів на зразок Webpack, а не для кінцевих користувачів.</p>
<p>Синтаксис імпорту CSS-модуля нагадує імпорт файлу JavaScript модуля. У CSS-модулі є експорт за замовчуванням - об'єкт відповідності оригінального та згенерованих імен класів. У фінальному файлі стилів буде унікальне ім'я класу у форматі [filename]_[classname]__[hash].</p>


{/* ----------- */}
<div className={css.tabs}>
        <button className={css.tabButton}>src/components/Alert.module.css</button>
      </div>

      <div>
        <pre className={css.code}>
{'//'}&nbsp;Синтаксис&nbsp;імпорту&nbsp;CSS-модуля
<br/>import&nbsp;css&nbsp;from&nbsp;&quot;./Alert.module.css&quot;;
<br/>
<br/>{'//'}&nbsp;Отримуємо&nbsp;об&#39;єкт&nbsp;відповідності&nbsp;імен&nbsp;класів
<br/>console.log(css);&nbsp;//&nbsp;{'{'}&nbsp;alert:&nbsp;&quot;Alert_alert_ax7yz&quot;&nbsp;{'}'}
<br/>
<br/>const&nbsp;Alert&nbsp;=&nbsp;({'{'}&nbsp;children&nbsp;{'}'})&nbsp;=&gt;&nbsp;{'{'}
<br/> &nbsp;{'//'}&nbsp;Звертаємось&nbsp;до&nbsp;властивості&nbsp;об&#39;єкта&nbsp;на&nbsp;ім&#39;я&nbsp;класу&nbsp;з&nbsp;файлу&nbsp;модуля
<br/> &nbsp;return&nbsp;&lt;p&nbsp;className={'{'}css.alert{'}'}&gt;{'{'}children{'}'}&lt;/p&gt;;
<br/>{'}'};   
</pre>
      </div>
{/* ----------- */}

<p>Розберіть код живого прикладу, в якому використовується весь матеріал, який ми з вами розібрали до цього моменту.</p>

<div className={css.codepen}>
        <IframeComponentFour />
      </div>

<p className={css.note}>ГЛОБАЛЬНІ СТИЛІ: <br />
Селектори тегів за замовчуванням будуть у глобальній області видимості, CSS-модулі генерують лише унікальні імена селекторів класу.</p>
<h2>Властивість composes</h2>
<p>Композиція селекторів це одна з ключових можливостей CSS-модулів, яка дозволяє створювати клас, наслідуючи стилі іншого класу, але не дублюючи їх. Використовуємо композицію класів та виконаємо рефакторинг стилів компонента Alert. Наслідуємо стилі базового класу .alert у всіх класах варіантів. Властивість composes має передувати іншим правилам, щоб можна було перевизначити стилі, якщо це необхідно.</p>      

{/* ----------- */}
<div className={css.tabs}>
        <button className={css.tabButton}>src/components/Alert.module.css</button>
      </div>

      <div>
        <pre className={css.code}>
.alert&nbsp;{'{'}
<br/> &nbsp;margin:&nbsp;8px;
<br/> &nbsp;padding:&nbsp;12px&nbsp;16px;
<br/> &nbsp;border-radius:&nbsp;4px;
<br/> &nbsp;background-color:&nbsp;gray;
<br/> &nbsp;color:&nbsp;white;
<br/>{'}'}
<br/>
<br/>.info&nbsp;{'{'}
<br/> &nbsp;composes:&nbsp;alert;
<br/> &nbsp;background-color:&nbsp;blue;
<br/>{'}'}
<br/>
<br/>.success&nbsp;{'{'}
<br/> &nbsp;composes:&nbsp;alert;
<br/> &nbsp;background-color:&nbsp;green;
<br/>{'}'}
<br/>
<br/>.error&nbsp;{'{'}
<br/> &nbsp;composes:&nbsp;alert;
<br/> &nbsp;background-color:&nbsp;red;
<br/>{'}'}
<br/>
<br/>.warning&nbsp;{'{'}
<br/> &nbsp;composes:&nbsp;alert;
<br/> &nbsp;background-color:&nbsp;orange;
<br/>{'}'}
</pre>
      </div>
{/* ----------- */}

<p>При композиції у простих випадках можна обійтися без бібліотеки clsx. Не задаємо базовий клас alert, тому що від нього виконано композицію класів варіантів. В результаті на елементі &lt;p&gt; будуть два класи, базовий alert і клас варіанта, у якому перевизначається значення кольору фону.</p>

{/* ----------- */}
<div className={css.tabs}>
        <button className={css.tabButton}>src/components/Alert.module.css</button>
      </div>

      <div>
        <pre className={css.code}>
import&nbsp;css&nbsp;from&nbsp;&quot;./Alert.module.css&quot;;
<br/>
<br/>const&nbsp;Alert&nbsp;=&nbsp;({'{'}&nbsp;variant,&nbsp;children&nbsp;{'}'})&nbsp;=&gt;&nbsp;{'{'}
<br/> &nbsp;return&nbsp;&lt;p&nbsp;className={'{'}css[variant]{'}'}&gt;{'{'}children{'}'}&lt;/p&gt;;
<br/>{'}'};
</pre>
      </div>
{/* ----------- */}
<p className={css.note}>ДОСТУП ДО ВЛАСТИВОСТЕЙ: <br />
До властивостей об'єкта зазвичай звертаються як css.alert, але можна використовувати квадратні дужки, наприклад css["alert"]. Це корисно у випадку коли ім'я властивості зберігається у змінній, як у нас у пропсі variant.</p>
<h2>Бібліотека clsx</h2>
<p>Додамо CSS класи для вже знайомих нам пропсів outlined та elevated. Імена класи, що складаються з декількох слів записують у верблюжій нотації. В протилежному випадку, оскільки вони стають властивостями об'єкта, звертатися до них доведеться через квадратні дужки, наприклад css["is-outlined"], що менш зручно.</p>


{/* ----------- */}
<div className={css.tabs}>
        <button className={css.tabButton}>src/components/Alert.module.css</button>
      </div>

      <div>
        <pre className={css.code}>
{'/*'}&nbsp;Весь&nbsp;попередній&nbsp;CSS&nbsp;код&nbsp;{'*/'}
<br/>
<br/>.alert.isOutlined&nbsp;{'{'}
<br/> &nbsp;outline:&nbsp;1px&nbsp;solid&nbsp;black;
<br/>{'}'}
<br/>
<br/>.alert.isElevated&nbsp;{'{'}
<br/> &nbsp;box-shadow:&nbsp;rgb(0&nbsp;0&nbsp;0&nbsp;/&nbsp;20%)&nbsp;0px&nbsp;3px&nbsp;3px&nbsp;-2px,&nbsp;rgb(0&nbsp;0&nbsp;0&nbsp;/&nbsp;14%)&nbsp;0px&nbsp;3px&nbsp;4px&nbsp;0px,
<br/> &nbsp; &nbsp;rgb(0&nbsp;0&nbsp;0&nbsp;/&nbsp;12%)&nbsp;0px&nbsp;1px&nbsp;8px&nbsp;0px;
<br/>{'}'}
</pre>
      </div>
{/* ----------- */}

<p>Тепер ми знову використовуємо бібліотеку clsx для складання фінального значення властивості className.</p>

{/* ----------- */}
<div className={css.tabs}>
        <button className={css.tabButton}>src/components/Alert.module.css</button>
      </div>

      <div>
        <pre className={css.code}>
import&nbsp;clsx&nbsp;from&nbsp;&quot;clsx&quot;;
<br/>import&nbsp;css&nbsp;from&nbsp;&quot;./Alert.module.css&quot;;
<br/>
<br/>const&nbsp;Alert&nbsp;=&nbsp;({'{'}&nbsp;variant,&nbsp;outlined,&nbsp;elevated,&nbsp;children&nbsp;{'}'})&nbsp;=&gt;&nbsp;{'{'}
<br/> &nbsp;return&nbsp;(
<br/> &nbsp; &nbsp;&lt;p
<br/> &nbsp; &nbsp; &nbsp;className={'{'}clsx(css[variant],&nbsp;{'{'}
<br/> &nbsp; &nbsp; &nbsp; &nbsp;[css.isOutlined]:&nbsp;outlined,
<br/> &nbsp; &nbsp; &nbsp; &nbsp;[css.isElevated]:&nbsp;elevated,
<br/> &nbsp; &nbsp; &nbsp;{'}'}){'}'}
<br/> &nbsp; &nbsp;&gt;
<br/> &nbsp; &nbsp; &nbsp;{'{'}children{'}'}
<br/> &nbsp; &nbsp;&lt;/p&gt;
<br/> &nbsp;);
<br/>{'}'};
</pre>
      </div>
{/* ----------- */}
<p>Розберіть код живого прикладу, в якому використовується весь матеріал, який ми з вами розібрали до цього моменту.</p>


<div className={css.codepen}>
        <IframeComponentFive />
      </div>


    </div>
    

    
    ) 
    
    }
    
    export default ReactAbstractOneCSSModules
// import { Link, Outlet } from 'react-router-dom';
// import css from '../../../components/Layout.module.css';

// const Abstract = () => {
//   return (
//     <div className={css.generalbox}>
//       <ul className={css.leftbox}>
//         <li className={css.module}><Link to="">Компоненти та колекції. Стилізація</Link>
//             <ul className={css.moduleItems}> 
//                 <li><Link to="web-apps">Веб-застосунки</Link></li>
//                 <li><Link to="">Бібліотека React</Link></li>
//                 <li><Link to="">Інструменти</Link></li>
//                 <li><Link to="">JSX</Link></li>
//                 <li><Link to="">Компоненти</Link></li>
//                 <li><Link to="">Рендер за умовою</Link></li>
//                 <li><Link to="">Колекції</Link></li>
//                 <li><Link to="">Вбудовані стилі</Link></li>
//                 <li><Link to="">Ванільний CSS</Link></li>
//                 <li><Link to="">CSS-модулі</Link></li>
//                 <li><Link to="">Нормалізація стилів</Link></li>
                
//             </ul>
          
//         </li>
//         <li>
//           <Link to="paintings">Paintings</Link>
//         </li>
//         <li>
//           <Link to="stylization">Stylization</Link>
//         </li>
//         <li>
//           <Link to="emotion-library">Emotion library</Link>
//         </li>
//         <li>
//           <Link>4</Link>
//         </li>
//         <li>
//           <Link>5</Link>
//         </li>
//         <li>
//           <Link>6</Link>
//         </li>
//         <li>
//           <Link>7</Link>
//         </li>
//       </ul>
//       <div className={css.rightbox}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Abstract;

// !-----------------
// import { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import css from '../../../components/Layout.module.css';

// const Abstract = () => {
//   // Стан для зберігання відкритого індексу аккордеона
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     // Якщо клікнули на той же індекс, закриваємо
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       // Відкриваємо новий індекс
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div className={css.generalbox}>
//       <ul className={css.leftbox}>
//         <li className={css.module}>
//           <Link to="#" onClick={() => toggleAccordion(0)}>
//             Компоненти та колекції. Стилізація
//           </Link>
//           <ul
//             className={css.moduleItems}
//             style={{ maxHeight: activeIndex === 0 ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
//           >
//             <li><Link to="web-apps">Веб-застосунки</Link></li>
//             <li><Link to="#">Бібліотека React</Link></li>
//             <li><Link to="#">Інструменти</Link></li>
//             <li><Link to="#">JSX</Link></li>
//             <li><Link to="#">Компоненти</Link></li>
//             <li><Link to="#">Рендер за умовою</Link></li>
//             <li><Link to="#">Колекції</Link></li>
//             <li><Link to="#">Вбудовані стилі</Link></li>
//             <li><Link to="#">Ванільний CSS</Link></li>
//             <li><Link to="#">CSS-модулі</Link></li>
//             <li><Link to="#">Нормалізація стилів</Link></li>
//           </ul>
//         </li>
//         <li className={css.module}>
//           <Link to="#" onClick={() => toggleAccordion(0)}>
//           Події та стан. Форми
//           </Link>
//           <ul
//             className={css.moduleItems}
//             style={{ maxHeight: activeIndex === 0 ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
//           >
//             <li><Link to="#">Компоненти-класи</Link></li>
//             <li><Link to="#">Події</Link></li>
//             <li><Link to="#">Внутрішній стан компонента</Link></li>
//             <li><Link to="#">Форми</Link></li>
//           </ul>
//         </li>
       
//       </ul>
//       <div className={css.rightbox}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Abstract;

// !--------------------------

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../../../components/Layout.module.css';

const Abstract = () => {
  // Стан для зберігання відкритих аккордеонів (індекси)
  const [activeAccordions, setActiveAccordions] = useState([]);

  const toggleAccordion = (index) => {
    // Якщо індекс є в масиві, видаляємо його, інакше додаємо
    setActiveAccordions((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(0)}>
            Компоненти та колекції. Стилізація
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(0) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="web-apps">Веб-застосунки</Link></li>
            <li><Link to="react-library">Бібліотека React</Link></li>
            <li><Link to="tools">Інструменти</Link></li>
            <li><Link to="jsx">JSX</Link></li>
            <li><Link to="components">Компоненти</Link></li>
            <li><Link to="render-by-condition">Рендер за умовою</Link></li>
            <li><Link to="#">Колекції</Link></li>
            <li><Link to="#">Вбудовані стилі</Link></li>
            <li><Link to="#">Ванільний CSS</Link></li>
            <li><Link to="#">CSS-модулі</Link></li>
            <li><Link to="#">Нормалізація стилів</Link></li>
          </ul>
        </li>
        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(1)}>
            Події та стан. Форми
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(1) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Компоненти-класи</Link></li>
            <li><Link to="#">Події</Link></li>
            <li><Link to="#">Внутрішній стан компонента</Link></li>
            <li><Link to="#">Форми</Link></li>
          </ul>
        </li>

        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(3)}>
          Життєвий цикл компонента. Робота з REST API
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(3) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="web-apps">Життєвий цикл</Link></li>
            <li><Link to="#">HTTP-запити</Link></li>
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(4)}>
          Хуки
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(4) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Вступ</Link></li>
            <li><Link to="#">Хук useState</Link></li>
            <li><Link to="#">Хук useEffect</Link></li>
            <li><Link to="#">Власні хуки</Link></li>
            <li><Link to="#">Контекст та useContext</Link></li>
            <li><Link to="#">Хук useRef</Link></li>
            <li><Link to="#">Хук useMemo</Link></li>
          </ul>
        </li>

        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(5)}>
          React Router. React router та поділ коду
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(5) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Маршрутизація</Link></li>
            <li><Link to="#">Компонент &lt;BrowserRouter&gt;</Link></li>
            <li><Link to="#">Компоненти &lt;Route&gt; та &lt;Routes&gt;</Link></li>
            <li><Link to="#">Компоненти &lt;Link&gt; та &lt;NavLink&gt;</Link></li>
            <li><Link to="#">URL-параметри</Link></li>
            <li><Link to="#">Вкладені маршрути</Link></li>
            <li><Link to="#">Індексні маршрути</Link></li>
            <li><Link to="#">Програмна навігація</Link></li>
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(6)}>
          Основи Redux. Бібліотека Redux Toolkit та React-redux хуки
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(6) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="web-apps">Управління станом</Link></li>
            <li><Link to="#">Планувальник завдань</Link></li>
            <li><Link to="#">Встановлення</Link></li>
            <li><Link to="#">Стор (store)</Link></li>
            <li><Link to="#">Підписка на стор</Link></li>
            <li><Link to="#">Екшени (actions)</Link></li>
            <li><Link to="#">Редюсери (reducers)</Link></li>
            <li><Link to="#">Redux Toolkit</Link></li>
            <li><Link to="#">Встановлення</Link></li>
            <li><Link to="#">configureStore</Link></li>
            <li><Link to="#">createAction</Link></li>
            <li><Link to="#">createReducer</Link></li>
            <li><Link to="#">createSlice</Link></li> 
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(7)}>
          Асинхронний Redux. Селектори та бібліотека Reselect
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(7) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Асинхронні операції</Link></li>
            <li><Link to="#">Операції</Link></li>
            <li><Link to="#">createAsyncThunk</Link></li>
            <li><Link to="#">Планувальник завдань</Link></li>
            <li><Link to="#">Селектори</Link></li>
            <li><Link to="#">Найменування</Link></li>
            <li><Link to="#">Складові селектори</Link></li>
            <li><Link to="#">Оптимізація</Link></li>
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(8)}>
          Реєстрація та логін користувача
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(8) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Облікові записи</Link></li>
            <li><Link to="#">Права доступу</Link></li>
          </ul>
        </li>

      </ul>
      <div className={css.rightbox}>
        <Outlet />
      </div>
    </div>
  );
};

export default Abstract;


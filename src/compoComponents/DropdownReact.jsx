import { NavLink } from 'react-router-dom';

import css from '../compoComponents/LayoutComponents.module.css';

const DropdownReact = () => {
  return (
    <div>
      <ul className={css.hidden__menu}>
        <li>
          <NavLink className={`${css.nav__link} ${css.react}`}>
            Компоненти та коллекції. Стилізація
          </NavLink>
        </li>
        <li>
          <NavLink>Події та стан. Форми</NavLink>
        </li>
        <li>
          <NavLink>Життєвий цикл компонента. Робота з REST API</NavLink>
        </li>
        <li>
          <NavLink>Хуки</NavLink>
        </li>
        <li>
          <NavLink>React Router. React Router та поділ коду</NavLink>
        </li>
        <li>
          <NavLink>
            Основи Redux. Бібліотека Redux Toolkit та React-redux хуки
          </NavLink>
        </li>
        <li>
          <NavLink>Асинхронний Redux. Сектори та бібліотека Reselect</NavLink>
        </li>
        <li>
          <NavLink>Реєстрація та логін користувача</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownReact;

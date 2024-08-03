import { NavLink } from 'react-router-dom';

import css from '../components/Layout.module.css';

const DropdownMarkup = () => {
  return (
    <div>
      <ul className={css.hidden__menu}>
        <li>
          <NavLink className={css.nav__link}>Основи HTML</NavLink>
        </li>
        <li>
          <NavLink>Основи CSS</NavLink>
        </li>
        <li>
          <NavLink>Блокова модель. Flexbox</NavLink>
        </li>
        <li>
          <NavLink>Grid</NavLink>
        </li>
        <li>
          <NavLink>Деккоративні ефекти та елементи. Векторна графіка</NavLink>
        </li>
        <li>
          <NavLink>Позиціоновані елементи. Переходи та анімація</NavLink>
        </li>
        <li>
          <NavLink>Розмітка форм. Стилізація форм</NavLink>
        </li>
        <li>
          <NavLink>Методологія BEM. Препроцесор SASS</NavLink>
        </li>
        <li>
          <NavLink>Адаптивна верстка. Адаптивна графіка</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMarkup;

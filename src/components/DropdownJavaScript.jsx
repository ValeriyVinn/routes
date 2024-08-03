import { NavLink } from 'react-router-dom';

import css from '../components/Layout.module.css'


const DropdownJavaScript = () => {
  return (
    <div>
      <ul className={css.hidden__menu}>
        <li>
          <NavLink className={css.nav__link} to='javascript/module-one-variables-branching-loops'>Змінні та типи. Розгалуження. Цикли</NavLink>
        </li>
        <li>
          <NavLink>Масиви. Функції</NavLink>
        </li>
        <li>
          <NavLink>Об'єкти. Операції rest та spread</NavLink>
        </li>
        <li>
          <NavLink>Перебираючі методи масиву</NavLink>
        </li>
        <li>
          <NavLink>Ключове слово this. Прототипи та класи</NavLink>
        </li>
        <li>
          <NavLink to='javascript/module-six-events'>DOM та події</NavLink>
        </li>
        <li>
          <NavLink>Паттерни та оптимізація подій</NavLink>
        </li>
        <li>
          <NavLink>Інфраструктура проектів. Веб-сховище</NavLink>
        </li>
        <li>
          <NavLink>Асинхронність та DATE. Проміси</NavLink>
        </li>
        <li>
          <NavLink>Взаємодія з бекендом</NavLink>
        </li>
        <li>
          <NavLink>CRUD. Асинхронні функції</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownJavaScript;
import { Link} from 'react-router-dom';

import css from '../components/Layout.module.css';

const DropdownReact = () => {
  return (
    <div>
      <ul className={css.hidden__menu}>
        <li>
          <Link to='react/module-one-components' className={css.nav__link }>
            Компоненти та коллекції. Стилізація
          </Link>
        </li>
        <li>
          <Link to='react/module-two-components' >Події та стан. Форми</Link>
        </li>
        <li>
          <Link>Життєвий цикл компонента. Робота з REST API</Link>
        </li>
        <li>
          <Link>Хуки</Link>
        </li>
        <li>
          <Link to='react/router'>React Router. React Router та поділ коду</Link>
        </li>
        <li>
          <Link>
            Основи Redux. Бібліотека Redux Toolkit та React-redux хуки
          </Link>
        </li>
        <li>
          <Link>Асинхронний Redux. Сектори та бібліотека Reselect</Link>
        </li>
        <li>
          <Link>Реєстрація та логін користувача</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownReact;


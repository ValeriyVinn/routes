import { Link } from 'react-router-dom';

import css from '../components/Layout.module.css';

const DropdownNode = () => {
  return (
    <div>
      <ul className={css.hidden__menu}>
        <li>
          <Link to="node/abstract" className={css.nav__link}>
            Конспект
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownNode;

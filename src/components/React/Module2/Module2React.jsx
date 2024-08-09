import { Link, Outlet } from 'react-router-dom';
import css from '../../../components/Layout.module.css';

const ListOfComponentsReact2 = () => {
  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li>
          <Link to="counter">Counter</Link>
        </li>
        <li>
          <Link to="dropdown">Dropdown</Link>
        </li>
        <li>
          <Link to="color-picker">Color Picker</Link>
        </li>
        <li>
          <Link>4</Link>
        </li>
        <li>
          <Link>5</Link>
        </li>
        <li>
          <Link to="">6</Link>
        </li>
        <li>
          <Link>7</Link>
        </li>
        <li>
          <Link to="">8</Link>
        </li>
      </ul>
      <div className={css.rightbox}>
        <Outlet />
      </div>
    </div>
  );
};

export default ListOfComponentsReact2;

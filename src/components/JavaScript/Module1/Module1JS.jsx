import { Link, Outlet } from 'react-router-dom';
import css from '../../../components/Layout.module.css';

const Module1JS = () => {
  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li>
          <Link to="">Tech. interview HTML-CSS</Link>
        </li>
        <li>
          <Link to="technical-interview">Tech. interview Java script</Link>
        </li>
        <li>
          <Link to="">Tech. interview React</Link>
        </li>
        <li>
          <Link to="">3</Link>
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

export default Module1JS;

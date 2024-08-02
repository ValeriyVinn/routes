import { Link, Outlet } from 'react-router-dom';
import css from '../../../compoComponents/LayoutComponents.module.css'

const Module6JS = () => {
  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li>
          <Link to='hw-js6'>Домашня робота JS 6</Link>
        </li>
        <li>
          <Link to=''>2</Link>
        </li>
        <li>
          <Link to=''>3</Link>
        </li>
        <li>
          <Link>4</Link>
        </li>
        <li>
          <Link>5</Link>
        </li>
        <li>
          <Link to=''>DOM і події</Link>
        </li>
        <li>
          <Link>7</Link>
        </li>
        <li>
          <Link to=''>Zero</Link>
        </li>
      </ul>
      <div className={css.rightbox}><Outlet/></div>
    </div>
  );
};

export default Module6JS;
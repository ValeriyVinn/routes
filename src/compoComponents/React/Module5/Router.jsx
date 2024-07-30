import { Link, Outlet } from 'react-router-dom';
import css from '../../../compoComponents/LayoutComponents.module.css'

const RouterComponent = () => {
  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li>
          <Link to='first-react-component'>1</Link>
        </li>
        <li>
          <Link to='second-react-component'>2</Link>
        </li>
        <li>
          <Link>3</Link>
        </li>
        <li>
          <Link>4</Link>
        </li>
        <li>
          <Link>5</Link>
        </li>
        <li>
          <Link>6</Link>
        </li>
        <li>
          <Link>7</Link>
        </li>
        <li>
          <Link>8</Link>
        </li>
      </ul>
      <div className={css.rightbox}><Outlet/></div>
    </div>
  );
};

export default RouterComponent;



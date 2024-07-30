import { Link, Outlet } from 'react-router-dom';
import css from '../../../compoComponents/LayoutComponents.module.css'

const Module1 = () => {
  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li>
          <Link to='paintings'>Paintings</Link>
        </li>
        <li>
          <Link to='stylization'>Stylization</Link>
        </li>
        <li>
          <Link to='emotion-library'>Emotion library</Link>
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
          <Link to='zero'>Zero</Link>
        </li>
      </ul>
      <div className={css.rightbox}><Outlet/></div>
    </div>
  );
};

export default Module1;
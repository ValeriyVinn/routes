import { Link, Outlet } from 'react-router-dom';
import css from './PagesInterview.module.css';

const TechnicalInterviewComponent = () => {
  return (
    <div>
      <h1>Technical Interview</h1>
      <div className={css.generalbox}>
        <ul className={css.leftbox}>
          <li>
            <Link to="html-css-hire">HTML-CSS</Link>
          </li>
          <li>
            <Link to="java-sctipt-hire">Java Script</Link>
          </li>
          <li>
            <Link to="react-hire">React</Link>
          </li>
          <li>
            <Link to="node-hire">Node</Link>
          </li>
        </ul>

        <Outlet className={css.rightbox} />
      </div>
    </div>
  );
};
export default TechnicalInterviewComponent;

import { Routes, Route} from 'react-router-dom';
import JavaScript from 'pagesComponents/PagesJavaScript';
import MarkUp from 'pagesComponents/PagesMarkUp';
import React from 'pagesComponents/PagesReact';
import LayoutComponents from './LayoutComponents';
import ComponentsHome from 'pagesComponents/ComponentsHome';
// import css from '../compoComponents/AppComponents.module.css';

const AppComponents = () => {
  return (
    <div>
      {/* <nav>
        <ul className={css.list}>
        <li>
            <NavLink to="/" className={css.color}>Home</NavLink>
          </li>
          <li>
            <NavLink to="markup">HTML CSS</NavLink>
          </li>
          <li>
            <NavLink to="javascript">Java Script</NavLink>
          </li>
          <li>
            <NavLink to="react">React</NavLink>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<LayoutComponents />}>
          <Route index element={<ComponentsHome />} />
          <Route path="markup" element={<MarkUp />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<React />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppComponents;

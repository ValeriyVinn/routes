import { Outlet } from 'react-router-dom';

import css from '../components/Layout.module.css';


const ReactComponent = () => {
  return (
    <>
      <h1 className={css.headerOne}>React</h1>
      <Outlet />
    </>
  );
};
export default ReactComponent;

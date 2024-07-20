// import ComponentsHome from 'pagesComponents/ComponentsHome';
import {  NavLink, Outlet  } from 'react-router-dom';

import React from 'react';
import css from '../compoComponents/LayoutComponents.module.css';



const LayoutComponents = () => {
  return (
    <>
      <header >
        <ul className={css.list}>
          <li>
            <NavLink to="/">Home</NavLink>
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
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        It's Footer
      </footer>
      
    </>
  );
};

export default LayoutComponents;

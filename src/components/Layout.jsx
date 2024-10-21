import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import DropdownMarkup from './DropdownMarkup';
import DropdownJavaScript from './DropdownJavaScript';
import DropdownReact from './DropdownReact';
import DropdownNode from './DropdownNode';


import css from '../components/Layout.module.css';

const LayoutComponents = () => {
  return (
    <>
      <header>
        <ul className={css.nav__list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={`${css.name__menu} ${css.menu__style}`}>
            MarkUp
            <DropdownMarkup/>
          </li>
          <li className={`${css.name__menu} ${css.menu__style}`}>
            <NavLink to="javascript">Java Script</NavLink>
            <DropdownJavaScript/>
          </li>
          <li className={`${css.name__menu} ${css.menu__style}`}>
            <NavLink to="react">React</NavLink>
            <DropdownReact/>
            
          </li>
          <li className={`${css.name__menu} ${css.menu__style}`}>
            <NavLink to="node">NodeJS</NavLink>
            <DropdownNode/>
            
          </li>
          <li className={`${css.name__menu} ${css.menu__style}`}>
            <NavLink to="interview">Technical Interview</NavLink>
            {/* <DropdownNode/> */}
            
          </li>
        </ul>
      </header>

      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>It's Footer</footer>
    </>
  );
};

export default LayoutComponents;

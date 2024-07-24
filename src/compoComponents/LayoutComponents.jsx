// import MarkUp from 'pagesComponents/PagesMarkUp';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../compoComponents/LayoutComponents.module.css';

const LayoutComponents = () => {
  return (
    <>
      <header>
        <ul className={css.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="markup">MarkUp</NavLink>
          </li>
          <li>
            <NavLink to="javascript">Java Script</NavLink>
          </li>
          <li>
            <NavLink to="react">React</NavLink>
          </li>
        </ul>
        <ul className={css.test__list}>
          <li className={css.name__menu }>Abstract
            <ul className={`${css.hidden__menu} ${css.dropdown}`}>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
            </ul>
          </li>
          <li>Workout</li>
          <li>Blackboard</li>
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

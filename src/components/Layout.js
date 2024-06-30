import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
color: black;

&.active {
  color: red
}
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Домашня</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Колекція</StyledLink>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        
      </main>
    </div>
  );
};

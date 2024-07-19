

// import ComponentsHome from 'pagesComponents/ComponentsHome';
import React from 'react';
import { Outlet } from 'react-router-dom';



const Layout = () => {
  return (
    <>
      {/* <ComponentsHome /> */}
      <Outlet />
    </>
  );
};

export default Layout;
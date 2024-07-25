import { Routes, Route } from 'react-router-dom';
import JavaScript from 'pagesComponents/PagesJavaScript';
import MarkUp from 'pagesComponents/PagesMarkUp';
import React from 'pagesComponents/PagesReact';
import LayoutComponents from './LayoutComponents';
import ComponentsHome from 'pagesComponents/ComponentsHome';
// import css from '../compoComponents/AppComponents.module.css';

const AppComponents = () => {
  return (
    <div>
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

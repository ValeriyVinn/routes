import { Routes, Route } from 'react-router-dom';
import JavaScript from 'pagesComponents/PagesJavaScript';
import MarkUp from 'pagesComponents/PagesMark';
import ReactComponent from 'pagesComponents/PagesReact';
import LayoutComponents from './LayoutComponents';
import ComponentsHome from 'pagesComponents/ComponentsHome';
import NotFound from 'pagesComponents/PagesNotFound';
import RouterComponent from './React/Module5/Router';
import FirstReactComponent from './React/Module5/FirstReactComponent/FirstReactComponent';
import SecondReactComponent from './React/Module5/SecondReactComponent/SecondReactComponent';
import Module1 from './React/Module1/Module1';
import PaintingList from './React/Module1/Paintings/PaintingList';
import Section from './React/Module1/Paintings/Section';
import paintingsData from './React/Module1/Paintings/PaintingsData.json';
import PageTitle from './React/Module1/Stylization/PageTitle';
import upcomingEvents from './React/Module1/Stylization/upcoming-events.json';
import EventBoard from './React/Module1/Stylization/EventBoard';

import StackOfFiles from './React/Module1/Zero/StackOfFiles';
import cars from './React/Module1/Zero/list-of-files';

// import css from '../compoComponents/AppComponents.module.css';

const AppComponents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComponents />}>
          <Route index element={<ComponentsHome />} />
          <Route path="markup" element={<MarkUp />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<ReactComponent />}>
            <Route path="module-one-components" element={<Module1 />}>
              <Route
                path="paintings"
                element={
                  <Section title="The beautiful is near">
                    <PaintingList items={paintingsData} />
                  </Section>
                }
              />
              <Route
                path="stylization"
                element={
                  <>
                    <PageTitle text={'24 core worlds coalition conference'} />
                    <EventBoard events={upcomingEvents} />
                  </>
                }
              />
              <Route path="zero" element={<StackOfFiles cars={cars} />} />
            </Route>
            <Route path="router" element={<RouterComponent />}>
              <Route
                path="first-react-component"
                element={<FirstReactComponent />}
              />
              <Route
                path="second-react-component"
                element={<SecondReactComponent />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppComponents;

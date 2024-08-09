import { Routes, Route } from 'react-router-dom';

import {
  JavaScript,
  MarkUp,
  ReactComponent,
  LayoutComponents,
  ComponentsHome,
  NotFound,
  Module1JS,
  TechInterview,
  Module6JS,
  HomeWorkJs6,
  Module1,
  PaintingList,
  Section,
  paintingsData,
  PageTitle,
  upcomingEvents,
  EventBoard,
  EmotionPageTitle,
  EmotionEventBoard,
  StackOfFiles,
  cars,
  ListOfComponentsReact2,
  Counter,
  RouterComponent,
  FirstReactComponent,
  SecondReactComponent,
  Container,
  Dropdown,
  ColorPicker, 
  colorPickerOptions
} from './Imports/Imports';

// import css from '../compoComponents/AppComponents.module.css';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LayoutComponents />}>
          <Route index element={<ComponentsHome />} />
          <Route path="markup" element={<MarkUp />} />
          <Route path="javascript" element={<JavaScript />}>
            <Route
              path="module-one-variables-branching-loops"
              element={<Module1JS />}
            >
              <Route path="technical-interview" element={<TechInterview />} />
            </Route>
            <Route path="module-six-events" element={<Module6JS />}>
              <Route path="hw-js6" element={<HomeWorkJs6 />} />
            </Route>
          </Route>

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
                    <PageTitle
                      text={'24 core worlds coalition conference stylization'}
                    />
                    <EventBoard events={upcomingEvents} />
                  </>
                }
              />
              <Route
                path="emotion-library"
                element={
                  <>
                    <EmotionPageTitle
                      text={'24 core worlds conference on emotion library'}
                    />
                    <EmotionEventBoard events={upcomingEvents} />
                  </>
                }
              />
              <Route path="zero" element={<StackOfFiles cars={cars} />} />
            </Route>
            <Route
              path="module-two-components"
              element={<ListOfComponentsReact2 />}
            >
              <Route path="counter" element={<Counter />} />
              <Route path="dropdown" element={<Dropdown />} />
              <Route path='color-picker' element={<ColorPicker options={colorPickerOptions}/>}/>
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
    </Container>
  );
};
export default App;

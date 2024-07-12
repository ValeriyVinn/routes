import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../pagesDraft/HomePage';
import FirstPage from '../pagesDraft/FirstPages';
import SecondPage from '../pagesDraft/SecondPage';
// import Layout from '../componentsLo/Layout';

const AppDraft = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/firstPage">First Page</NavLink>
        </li>
        <li>
          <NavLink to="/secondPage">Second Page</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/firstPage" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </div>
  );
};

export default AppDraft;

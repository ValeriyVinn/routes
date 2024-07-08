import { Routes, Route } from 'react-router-dom';
import HomePage from '../pagesLo/HomePage';
import NewsPage from '../pagesLo/NewsPage';
import TodoPage from '../pagesLo/TodoPage';
import Layout from '../componentsLo/Layout';

const AppLo = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="news" element={<NewsPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppLo;

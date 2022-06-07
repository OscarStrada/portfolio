import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

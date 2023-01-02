import { Home } from '../pages/Home';
import Movie from '../pages/Movie';
import { Routes, Route } from 'react-router-dom';
import { MenuLink, Menu } from './App.styled';

export const App = () => {
  return (
    <>
      <Menu>
        <MenuLink to="/" end>
          Home
        </MenuLink>
        <MenuLink to="/movie">Movie </MenuLink>
      </Menu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="*" element="ERROR" />
      </Routes>
    </>
  );
};

import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { MenuLink, Menu } from './App.styled';

export const App = () => {
  return (
    <>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/movies">Movies </MenuLink>
      </Menu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element="ERROR" />
      </Routes>
    </>
  );
};

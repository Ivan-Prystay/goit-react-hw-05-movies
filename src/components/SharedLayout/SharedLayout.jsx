import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Menu, MenuLink } from './SharedLayout.styled';
import { Loader } from '../Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Menu>
        <MenuLink to="/" end>
          Home
        </MenuLink>
        <MenuLink to="/movies">Movies</MenuLink>
      </Menu>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;

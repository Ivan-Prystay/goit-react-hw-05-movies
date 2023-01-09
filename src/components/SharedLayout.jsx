import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Menu, MenuLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Menu>
          <MenuLink to="/" end>
            Home
          </MenuLink>
          <MenuLink to="/movies">Movies</MenuLink>
        </Menu>
      </header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
  background-color: rgba(68, 106, 175, 1);
  min-height: 100vh;
`;

export const Menu = styled.nav`
  display: flex;
  background-color: lightgray;
  align-items: center;
  border-radius: 4px;
`;

export const MenuLink = styled(NavLink)`
  display: inline-block;
  padding: 5px;
  background-color: gray;
  text-decoration: none;
  margin: 20px;
  border-radius: 5px;
  color: #212121;
  font-size: 20px;

  :hover {
    background-color: #3f51b5;
    color: white;
  }

  &.active {
    background-color: #87ceeb;
    color: white;
  }
`;

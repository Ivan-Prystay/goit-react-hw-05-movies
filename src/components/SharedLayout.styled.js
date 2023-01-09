import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
  border: 2px tomato dotted;
`;

export const Menu = styled.nav`
  display: flex;
  background-color: lightgray;
  align-items: center;
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
    background-color: blue;
    color: white;
  }

  &.active {
    background-color: skyblue;
    color: white;
  }
`;

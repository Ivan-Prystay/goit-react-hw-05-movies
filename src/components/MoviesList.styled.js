import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import noImage from '../images/no-image.svg';

export const NoImage = styled.div`
  background-image: url(${noImage});
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Image = styled.img`
  width: 200px;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
`;

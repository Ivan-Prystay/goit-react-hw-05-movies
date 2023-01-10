import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import noImage from '../../images/no-image.svg';
import noPhoto from '../../images/no-photo.svg';

export const ListMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 16px;
  justify-content: center;
  justify-items: center;
`;
export const CardMovie = styled.li`
  background-color: #87a7eb;
  border-radius: 15px;
  margin-top: 15px;
  padding: 15px;
  width: 240px;
`;

export const NoImage = styled.div`
  background-image: url(${noImage});
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const NoPhoto = styled.div`
  background-image: url(${noPhoto});
  height: 225px;
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
export const TitleParagraph = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;

export const PopularityParagraph = styled.p`
  font-size: 16px;
  padding-left: 14px;
  color: whitesmoke;
`;

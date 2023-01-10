import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import noImage from '../../images/no-image.svg';

export const ButtonBack = styled.button`
  display: block;
  padding: 5px;
  background-color: gray;
  margin: 20px;
  border-radius: 5px;
  color: #212121;
  font-size: 20px;
  border: none;

  :hover {
    background-color: #3f51b5;
    color: white;
  }

  &.active {
    background-color: #87ceeb;
    color: white;
  }
`;

export const CardMovie = styled.article`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    & {
      flex-direction: column;
    }
  }
`;

export const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const NoImage = styled.div`
  background-image: url(${noImage});
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Image = styled.img`
  padding: 15px;

  max-width: min-content;

  @media (min-width: 767px) {
    & {
      height: 50vh;
    }
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 34px;
  font-weight: 900;
  line-height: 1em;
  margin-bottom: 0;
`;

export const YearRelease = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0;
  text-align: center;
`;

export const UserScore = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1em;
  margin-bottom: 0;
`;

export const Genres = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1em;
  margin-bottom: 0;
`;

export const Overview = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-indent: 30px;
`;

export const AditionalTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1em;
  margin-bottom: 0;
`;

export const AditionalMenu = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

export const AditionaLink = styled(NavLink)`
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

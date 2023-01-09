import styled from 'styled-components';
import noImage from '../images/no-image.svg';

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

export const ImageWraper = styled.div`
  display: block;
  padding: 15px;
`;

export const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoImage = styled.div`
  background-image: url(${noImage});
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Image = styled.img`
  width: 300px;
  margin: 0 auto;
`;

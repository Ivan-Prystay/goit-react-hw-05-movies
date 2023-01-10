import styled from 'styled-components';

export const CastList = styled.ul`
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: center;
  justify-items: center;
`;

export const CastItem = styled.li`
  border: 2px solid #87ceeb;
  border-radius: 15px;
  margin-top: 15px;
  padding: 15px;
  width: 160px;
`;
export const Image = styled.img`
  width: 150px;
  border-radius: 14px;
  justify-content: center;
  margin: 0 auto;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`;

export const Character = styled.p`
  font-size: 18px;
  line-height: 1;
`;

import styled from 'styled-components';

export const MoviesForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 34px;
`;
export const SearchInput = styled.input`
  outline: none;
  display: block;
  border: solid 3px #87ceeb;
  border-radius: 4px;
  &:focus-visible {
    border: solid 3px #3f51b5;
  }
`;
export const SearchButton = styled.button`
  display: block;
`;

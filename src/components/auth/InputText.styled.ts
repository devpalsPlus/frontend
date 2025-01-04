import styled from 'styled-components';

export const Container = styled.input`
  border: none;
  width: 80%;
  font-size: 0.9em;
  color: ${({theme}) => theme.color.primary}
`;
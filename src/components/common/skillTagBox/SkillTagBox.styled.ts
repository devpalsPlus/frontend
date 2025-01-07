import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 6rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  width: 90%;
  padding: 2.5rem;
  border-radius: 3rem;
`;

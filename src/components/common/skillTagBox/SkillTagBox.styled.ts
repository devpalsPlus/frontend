import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  width: 90%;
  padding: 2rem;
  border-radius: 3rem;
`;

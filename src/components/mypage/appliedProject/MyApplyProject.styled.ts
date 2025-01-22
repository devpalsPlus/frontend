import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 1rem 0 1rem 1.2rem;
`;

export const Container = styled.div`
  background-color: rgb(246 246 246);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.5rem 3rem;
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

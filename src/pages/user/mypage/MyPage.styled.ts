import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 0 60px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0 10px;
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 22% - 1.25rem);
  min-width: 230px;
  height: 80vh;
  border: 2px solid #f0f0f0;
  border-radius: 30px;
  padding: 2rem;
`;

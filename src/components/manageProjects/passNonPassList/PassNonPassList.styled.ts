import styled from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  min-width: 16rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 1.6rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    min-width: 9rem;
  }
`;

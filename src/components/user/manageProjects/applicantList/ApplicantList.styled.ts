import styled from 'styled-components';

export const Container = styled.div`
  width: 195px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 1rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0.7rem;
    width: 130px;
  }
`;

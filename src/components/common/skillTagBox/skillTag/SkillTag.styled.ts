import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
  }
`;

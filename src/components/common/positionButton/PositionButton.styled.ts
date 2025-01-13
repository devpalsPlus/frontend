import styled from 'styled-components';

export const Container = styled.div`
  .positionButton {
    background-color: ${({ theme }) => theme.color.lightgrey};
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    padding: 0.2rem 0.4rem;
  }
`;

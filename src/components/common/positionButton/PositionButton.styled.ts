import styled from 'styled-components';

export const Container = styled.div`
  .positionButton {
    background-color: ${({ theme }) => theme.color.lightgrey};
    width: fit-content;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.3rem;
  }
`;

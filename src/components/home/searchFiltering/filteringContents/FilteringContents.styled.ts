import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  display: flex;
  gap: 1rem;

  > * {
    width: 7.7rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.5rem;
    height: 2.8rem;
  }

  * {
    cursor: pointer;
  }

  .beginnerButton {
    justify-content: center;
    button {
      min-width: 7rem;
      img {
        padding-left: 0.8rem;
      }
    }
  }
`;

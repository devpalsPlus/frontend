import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 1000;

  > * {
    width: 7.7rem;
    height: 2.6rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.5rem;
  }

  .filteringButton {
    button {
      border-radius: 1.5rem;
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .beginnerButton {
    button {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
    }
  }

  svg {
    width: 1rem;
  }

  .skillTagBox {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 110%;
  }
`;

export const BeginnerDiv = styled.div<{ $toggle: boolean | null }>`
  outline: 1px solid
    ${({ theme, $toggle }) => ($toggle ? theme.color.navy : 'initial')};
  border: 1px solid
    ${({ theme, $toggle }) => ($toggle ? theme.color.navy : 'initial')};
  transition: all 100ms ease-in-out;

  button {
    color: ${({ theme, $toggle }) => ($toggle ? theme.color.navy : 'initial')};
    font-weight: ${({ $toggle }) => ($toggle ? 'bold' : 'initial')};
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #3e5879;
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;

  svg {
    color: white;
  }

  label {
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

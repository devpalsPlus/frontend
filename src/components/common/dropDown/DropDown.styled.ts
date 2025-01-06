import styled from 'styled-components';

export const DropDownStyle = styled.div`
  position: relative;
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .panel {
    position: absolute;
    top: 50px;
    right: 0;
    padding: 23px 28px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};
    z-index: 100;
  }
`;

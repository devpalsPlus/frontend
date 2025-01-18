import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  .toggle {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .panel {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
`;

import styled from 'styled-components';

export const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

export const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleLabel = styled.label`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 24px;
  transition: 0.3s;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }

  ${HiddenInput}:checked + & {
    background-color: #007bff;
  }

  ${HiddenInput}:checked + &:before {
    transform: translateX(24px);
  }
`;

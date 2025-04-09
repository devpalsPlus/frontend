import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const InputContainer = styled.div`
  display: flex;
  margin-left: 8px;
`;

export const Input = styled.input`
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-left: 5px;
  margin-top: 7px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
`;
export const Line = styled.hr<{ $isFocused: boolean }>`
  opacity: ${({ $isFocused }) => ($isFocused ? 1.0 : 0.2)};
  border: ${({ $isFocused }) => ($isFocused ? 2 : 1)};
`;

export const ButtonCancel = styled(Button)``;

export const ButtonSubmit = styled(Button)``;

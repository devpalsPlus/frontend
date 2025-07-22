import styled from 'styled-components';
import Button from '../../../common/Button/Button';

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 10px;
`;

export const Input = styled.input<{ $isEditMode?: boolean }>`
  width: 100%;
  flex: 1;
  font-size: 15px;
  margin-left: ${({ $isEditMode }) => ($isEditMode ? '0' : '10px')};
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-left: 5px;
  margin-top: 7px;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 3px;
`;
export const Line = styled.hr<{ $isFocused: boolean; $isEditMode?: boolean }>`
  opacity: ${({ $isFocused }) => ($isFocused ? 1.0 : 0.2)};
  border: ${({ $isFocused }) => ($isFocused ? 2 : 1)};
  margin-top: 4px;
  margin-left: ${({ $isEditMode }) => ($isEditMode ? '0' : '10px')};
`;

export const ButtonCancel = styled(Button)``;

export const ButtonSubmit = styled(Button)``;

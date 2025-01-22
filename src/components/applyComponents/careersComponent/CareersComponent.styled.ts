import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const CareerContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

export const AddButton = styled(Button)`
  width: 5%;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

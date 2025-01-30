import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const Container = styled.div`
  width: 100%;
`;

export const CareerContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 963px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AddButton = styled(Button)`
  width: 50px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

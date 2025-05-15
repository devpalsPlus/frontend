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

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    display: flex;
    gap: 10px;
  }
`;

export const AddButton = styled(Button)`
  width: 50px;
  height: 30px;
  font-size: 13px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

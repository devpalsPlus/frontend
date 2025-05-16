import styled from 'styled-components';
import PositionButton from '../../../../common/positionButton/PositionButton';

export const Container = styled.div``;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: -20px;
  padding: 3px 0;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-bottom: 15px;
`;

export const PositionButtonFeat = styled(PositionButton)<{
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px 5px;
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.buttonScheme.primary.bg : theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.buttonScheme.primary.bg : theme.color.white};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
  }

  .name {
    font-size: 0.8rem;
    font-weight: 200;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.white : theme.color.primary};
  }
`;

export const FormError = styled.p`
  margin-top: -15px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.red};
  top: 100%;
  left: 0;
  white-space: nowrap;
`;

import styled from 'styled-components';

export const CareerContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

export const AddButton = styled.button`
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

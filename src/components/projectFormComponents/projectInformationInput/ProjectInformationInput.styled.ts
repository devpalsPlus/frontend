import styled from 'styled-components';

export const InfoRow = styled.div`
  align-items: center;
  gap: 10px;
  margin-bottom: 1.8rem;
  display: flex;

  p {
    font-size: 0.8rem;
  }
`;

export const InfoLabel = styled.label`
  font-size: ${({ theme }) => theme.heading.small.fontSize};
  font-weight: bold;
  color: #333;
`;

export const welcomeSprout = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.placeholder};
`;

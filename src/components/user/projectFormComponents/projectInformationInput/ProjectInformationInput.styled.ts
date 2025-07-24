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

export const LabelDescription = styled.span`
  font-size: ${({ theme }) => theme.heading.xsSmall.fontSize};
  color: ${({ theme }) => theme.color.grey};
  font-weight: normal;
  margin-left: 8px;
`;

export const welcomeSprout = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.placeholder};
`;

import styled from 'styled-components';

export const InfoRow = styled.div`
  align-items: center;
  gap: 10px;
  margin-bottom: 1.8rem;
  display: flex;

  label {
    font-size: ${({ theme }) => theme.heading.small.fontSize};
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 0.8rem;
  }
`;

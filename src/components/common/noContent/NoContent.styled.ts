import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  svg {
    width: 10rem;
  }
`;

export const NoContentText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.navy};
`;

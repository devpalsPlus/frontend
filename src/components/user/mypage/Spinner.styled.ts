import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Circle = styled.div<{ $size: string; $color: string }>`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  border: 5px solid ${(props) => props.$color};
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerWrapperStyled = styled.div<{ $isAdmin?: boolean }>`
  width: ${({ $isAdmin }) => ($isAdmin ? '100%' : '100vw')};
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  width: 330px;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1000;
`;

export const Item = styled.div<{ $exiting: boolean }>`
  background-color: ${({ theme }) => theme.buttonScheme.grey.color};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  animation: ${fadeInUp} 0.3s ease-out,
    ${({ $exiting }) => $exiting && fadeOut} 0.3s ease-in forwards;
`;

export const LiveMessage = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LiveDate = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

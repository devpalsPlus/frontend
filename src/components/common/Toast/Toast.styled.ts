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
  background-color: #ffffff;
  border: 6px solid ${({ theme }) => theme.color.border};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  animation: ${fadeInUp} 0.3s ease-out,
    ${({ $exiting }) => $exiting && fadeOut} 0.3s ease-in forwards;
`;

export const LiveMessage = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LiveDate = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.95rem;
  margin-right: 5px;
  opacity: 80%;
`;

export const TypeArea = styled.div`
  display: flex;
  margin-left: 1px;
`;

export const Type = styled.p``;

export const TypeFilter = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.95rem;
  opacity: 80%;
  margin-right: 6px;
`;

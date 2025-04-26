import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgba(50, 50, 50, 0.9);
  color: ${({ theme }) => theme.color.white};
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 1rem;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

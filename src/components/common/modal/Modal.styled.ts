import styled from 'styled-components';

export const ModalContainer = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
  }
  &.fade-out {
    animation: fade-out 0.3s ease-in-out forwards;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;

  position: absolute;
  top: 0;
  right: 0;
  margin: 0.8rem;
  background: #ccc;
  border-radius: 50%;
  padding: 0.1rem;

  svg {
    color: ${({ theme }) => theme.color.white};
    width: 20px;
    height: 20px;
  }
`;

export const ModalIconWrapper = styled.div`
  margin-bottom: 1rem;

  svg {
    color: #385a91;
    width: 40px;
    height: 40px;
  }
`;

export const ModalContents = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #393939;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.color.white};
  max-width: 80%;
`;

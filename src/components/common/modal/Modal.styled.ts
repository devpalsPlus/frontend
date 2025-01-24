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
  padding: 12px;

  svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }
`;

export const ModalContents = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 56px 32px 32px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.color.navy};
  max-width: 80%;
`;

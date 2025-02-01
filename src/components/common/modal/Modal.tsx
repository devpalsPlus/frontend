import { useState } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import * as S from './Modal.styled';
import ScrollPreventor from './ScrollPreventor';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRefs = useOutsideClick(() => handleClose());
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClose = () => {
    setIsFadingOut(true);
  };

  const handleAnimationEnd = () => {
    if (isFadingOut) {
      onClose();
      setIsFadingOut(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <ScrollPreventor>
      <S.ModalContainer
        className={isFadingOut ? 'fade-out' : 'fade-in'}
        onAnimationEnd={handleAnimationEnd}
      >
        <S.ModalBody ref={modalRefs}>
          <S.ModalCloseButton onClick={handleClose}>
            <XMarkIcon />
          </S.ModalCloseButton>
          <S.ModalIconWrapper>
            <CheckCircleIcon />
          </S.ModalIconWrapper>
          <S.ModalContents>{children}</S.ModalContents>
        </S.ModalBody>
      </S.ModalContainer>
    </ScrollPreventor>,
    document.body
  );
};

export default Modal;

import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as S from './Modal.styled';
import ScrollPreventor from './ScrollPreventor';
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClose = () => {
    setIsFadingOut(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
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
        onClick={handleOverlayClick}
        onAnimationEnd={handleAnimationEnd}
      >
        <S.ModalBody ref={modalRef}>
          <S.ModalCloseButton onClick={handleClose}>
            <XMarkIcon />
          </S.ModalCloseButton>
          <S.ModalContents>{children}</S.ModalContents>
        </S.ModalBody>
      </S.ModalContainer>
    </ScrollPreventor>,
    document.body
  );
};

export default Modal;

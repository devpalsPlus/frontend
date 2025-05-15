import { PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import ScrollPreventor from './ScrollPreventor';
import { useOutsideClick } from '../../../hooks/user/useOutsideClick';
import { ModalWrapper } from './ModalWrapper';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<ModalProps>) => {
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
      <ModalWrapper isOpen={isOpen} onClose={onClose}>
        <ModalWrapper.Container
          $fadeOut={isFadingOut}
          onAnimationEnd={handleAnimationEnd}
        >
          <ModalWrapper.Body ref={modalRefs}>
            <ModalWrapper.CloseButton onClose={handleClose} />
            <ModalWrapper.ContentIcon Icon={<CheckCircleIcon />} />
            <ModalWrapper.Contents>{children}</ModalWrapper.Contents>
          </ModalWrapper.Body>
        </ModalWrapper.Container>
      </ModalWrapper>
    </ScrollPreventor>,
    document.body
  );
};

export default Modal;

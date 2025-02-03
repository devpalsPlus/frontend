import * as S from './Modal.styled';
import { XMarkIcon } from '@heroicons/react/24/outline';
interface ModalCloseButtonProps {
  onClose: () => void;
}

function ModalCloseButton({ onClose }: ModalCloseButtonProps) {
  return (
    <S.ModalCloseButton onClick={onClose} aria-label='Close modal'>
      <XMarkIcon />
    </S.ModalCloseButton>
  );
}

export default ModalCloseButton;

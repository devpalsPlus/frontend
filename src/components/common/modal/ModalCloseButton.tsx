import * as S from './Modal.styled';
import { XMarkIcon } from '@heroicons/react/24/outline';
interface ModalCloseButtonProps {
  onClose: () => void;
}

function ModalCloseButton({ onClose }: ModalCloseButtonProps) {
  return (
    <S.ModalCloseButton onClick={onClose}>
      <XMarkIcon />
    </S.ModalCloseButton>
  );
}

export default ModalCloseButton;

import { ButtonHTMLAttributes } from 'react';
import * as S from './DeleteButton.styled';
import { XMarkIcon } from '@heroicons/react/24/outline';
interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled: boolean;
}

function DeleteButton({ onClick, disabled }: DeleteButtonProps) {
  return (
    <S.DeleteButton
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick();
      }}
      disabled={disabled}
    >
      <XMarkIcon />
    </S.DeleteButton>
  );
}

export default DeleteButton;

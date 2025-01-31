import { ButtonHTMLAttributes } from 'react';
import * as S from './DeleteButton.styled';
import { XCircleIcon } from '@heroicons/react/24/outline';
interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  disabled: boolean;
}

function DeleteButton({ onClick, disabled }: DeleteButtonProps) {
  return (
    <S.DeleteButton onClick={onClick} disabled={disabled}>
      <XCircleIcon />
    </S.DeleteButton>
  );
}

export default DeleteButton;

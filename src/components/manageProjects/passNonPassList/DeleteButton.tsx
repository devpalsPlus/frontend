import { ButtonHTMLAttributes } from 'react';
import * as S from './DeleteButton.styled';
import { XCircleIcon } from '@heroicons/react/24/outline';
interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <S.DeleteButton onClick={onClick}>
      <XCircleIcon />
    </S.DeleteButton>
  );
}

export default DeleteButton;

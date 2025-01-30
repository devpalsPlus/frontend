import { ButtonHTMLAttributes } from 'react';
import * as S from './SendResultButton.styled';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
export interface SendResultButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onSubmit: () => void;
}

function SendResultButton({ onSubmit }: SendResultButtonProps) {
  return (
    <S.Wrapper>
      <S.SendEmailButton
        size='primary'
        schema='primary'
        radius='primary'
        onClick={onSubmit}
      >
        결과 전송 <EnvelopeIcon />
      </S.SendEmailButton>
    </S.Wrapper>
  );
}

export default SendResultButton;

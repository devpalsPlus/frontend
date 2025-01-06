import React, { ForwardedRef } from 'react';
import * as S from './InputText.styled';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
  inputType: 'text' | 'email' | 'password' | 'number',
}

const InputText = React.forwardRef(({ placeholder, inputType, onChange, ...props }: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
  return(
    <S.Container placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props}></S.Container>
  );
})

export default InputText;
import React, { ForwardedRef } from 'react';
import * as S from './InputText.styled';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
  inputType: 'text' | 'email' | 'password' | 'number';
  icon?: React.ReactNode;
}

const InputText = React.forwardRef(({ placeholder, inputType, icon, onChange, ...props }: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
  return(
    <S.Container>
      { icon && <S.IconContainer>{icon}</S.IconContainer> }
      <S.Input placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props}/>
    </S.Container>
  );
})

export default InputText;
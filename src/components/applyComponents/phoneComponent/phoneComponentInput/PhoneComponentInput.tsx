import { Control, useController } from 'react-hook-form';
import * as S from './PhoneComponentInput.styled';

interface PhoneInputProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  maxLength: number;
}

const PhoneInput = ({
  control,
  name,
  placeholder,
  maxLength,
}: PhoneInputProps) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <S.PhoneDiv>
      <S.PhoneInput
        {...field}
        maxLength={maxLength}
        placeholder={placeholder}
        name={name}
      />
    </S.PhoneDiv>
  );
};

export default PhoneInput;

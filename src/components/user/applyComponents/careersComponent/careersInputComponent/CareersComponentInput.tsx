import { Control, FieldErrors, useController } from 'react-hook-form';
import * as S from './CareersComponentInput.styled';

interface CareerInputProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  type?: string;
  errors?: FieldErrors;
  index?: number;
}

const CareerInput = ({
  control,
  name,
  placeholder = '',
  type = 'text',
  errors,
  index,
}: CareerInputProps) => {
  const { field: fieldApply } = useController({
    control,
    name: `careers.${index}.${name}`,
  });

  const hasError = Boolean(errors?.[name]);

  return (
    <>
      <S.CareerInput {...fieldApply} type={type} placeholder={placeholder} />
      {hasError && <S.FormError>{String(errors?.[name]?.message)}</S.FormError>}
    </>
  );
};

export default CareerInput;

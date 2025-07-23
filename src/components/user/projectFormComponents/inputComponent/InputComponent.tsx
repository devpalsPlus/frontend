import { Control, FieldErrors, useController } from 'react-hook-form';
import * as S from './InputComponent.styled';
import MdEditorInput from '../editor/MarkdownEditor';

type InputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  placeholder?: string;
  errors?: FieldErrors;
  type?: 'text' | 'date' | 'textarea' | 'number' | string;
  indexInfo?: string;
  unit?: string;
  min?: number;
};

const Input = ({
  control,
  name,
  errors,
  placeholder,
  type,
  indexInfo,
  unit,
  min = 0,
}: InputProps) => {
  const { field } = useController({
    control,
    name,
  });
  const hasError = Boolean(errors?.[name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 숫자 입력 필드인 경우 숫자만 허용
    if (name === 'maxVolunteers' || name === 'duration') {
      value = value.replace(/[^0-9]/g, '');

      // 음수 방지 (0보다 작은 값은 허용하지 않음)
      const numValue = Number(value);
      if (numValue < min) {
        return;
      }
    }

    field.onChange(e);
  };

  const renderInput = () => {
    if (indexInfo) {
      return (
        <S.InputWrapper>
          <S.InputInfoStyle
            {...field}
            type={type}
            placeholder={placeholder}
            onChange={handleInputChange}
            min={min}
            name={name}
          />
          {unit && <S.UnitText>{unit}</S.UnitText>}
        </S.InputWrapper>
      );
    }

    if (name === 'markdownEditor') {
      return <MdEditorInput field={{ ...field }} />;
    }

    return (
      <S.InputWrapper>
        <S.InputStyle
          {...field}
          type={type}
          placeholder={placeholder}
          onChange={handleInputChange}
          min={min}
          name={name}
        />
        {unit && <S.UnitText>{unit}</S.UnitText>}
      </S.InputWrapper>
    );
  };

  return (
    <S.InputContainer>
      {renderInput()}
      {hasError && (
        <S.FormError $markDown={name === 'markdownEditor'}>
          {String(errors?.[name]?.message)}
        </S.FormError>
      )}
    </S.InputContainer>
  );
};

export default Input;

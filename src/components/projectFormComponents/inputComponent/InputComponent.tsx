import { Control, FieldErrors, useController } from 'react-hook-form';
import * as S from './InputComponent.styled';
import MdEditorInput from '../editor/MarkdownEditor';

type InputProps = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  errors?: FieldErrors;
  type?: 'text' | 'date' | 'textarea' | 'number' | string;
  indexInfo?: string;
};

const Input = ({
  control,
  name,
  errors,
  placeholder,
  type,
  indexInfo,
}: InputProps) => {
  const { field } = useController({
    control,
    name,
  });
  const hasError = Boolean(errors?.[name]);

  const renderInput = () => {
    if (indexInfo) {
      return (
        <S.InputInfoStyle {...field} type={type} placeholder={placeholder} />
      );
    }

    if (name === 'markdownEditor') {
      return <MdEditorInput field={{ ...field }} />;
    }

    return <S.InputStyle {...field} type={type} placeholder={placeholder} />;
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

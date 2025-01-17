import {
  Control,
  FieldErrors,
  FieldValues,
  UseControllerReturn,
} from 'react-hook-form';
import * as S from './inputComponent.styled';
import {
  useControllerApply,
  useControllerCommon,
} from '../../../util/controllerForm';
import MdEditorInput from '../editor/MarkdownEditor';

type InputProps = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  errors?: FieldErrors;
  type?: 'text' | 'date' | 'textarea' | 'number' | string;
  indexInfo?: string;
  index?: number;
  field?: UseControllerReturn<FieldValues>['field'];
  maxLength?: number;
};

const Input = ({
  control,
  name,
  errors,
  placeholder = '',
  type = 'text',
  indexInfo,
  index,
  field,
  maxLength,
}: InputProps) => {
  const { fieldCommon } = useControllerCommon({
    control,
    name,
  });

  const { fieldApply } = useControllerApply({
    control,
    name: `careers.${index}.${name}`,
    index,
  });

  const hasError = Boolean(errors?.[name]);

  const renderInput = () => {
    if (indexInfo) {
      return (
        <S.InputInfoStyle
          {...fieldCommon}
          type={type}
          placeholder={placeholder}
        />
      );
    }

    if (field) {
      return (
        <S.CareerInput {...fieldApply} type={type} placeholder={placeholder} />
      );
    }

    if (maxLength) {
      return (
        <S.PhoneInput
          {...fieldCommon}
          maxLength={maxLength}
          placeholder={placeholder}
          name={name}
        />
      );
    }

    if (name === 'markdownEditor') {
      return <MdEditorInput field={{ ...fieldCommon }} />;
    }

    return (
      <S.InputStyle {...fieldCommon} type={type} placeholder={placeholder} />
    );
  };

  return (
    <S.InputContainer>
      {renderInput()}
      {hasError && <S.FormError>{String(errors?.[name]?.message)}</S.FormError>}
    </S.InputContainer>
  );
};

export default Input;

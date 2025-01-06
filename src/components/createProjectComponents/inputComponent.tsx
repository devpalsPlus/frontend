import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import * as S from '../../pages/createProject/CreateProject.styled';
import MdEditorInput from './\bmarkdownEditor/MdEditorInput';

type InputProps = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  errors: FieldErrors;
  type?:
    | 'text'
    | 'date'
    | 'textarea'
    | 'select'
    | 'number'
    | 'mdEditor'
    | string;
  index?: string;
};

const Input = ({
  control,
  name,
  errors,
  placeholder = '',
  type = 'text',
  index,
}: InputProps) => {
  const hasError = Boolean(errors?.[name]);

  const renderInput = (field: object) => {
    switch (type) {
      case 'date':
        return <S.DateInput {...field} type="date" placeholder={placeholder} />;
      case 'textarea':
        return <S.TextArea {...field} placeholder={placeholder} />;
      case 'mdEditor':
        return <MdEditorInput field={{ ...field }} />;
      default:
        return <S.Input {...field} type={type} placeholder={placeholder} />;
    }
  };

  const renderInputProjectInformation = (field: object) => {
    switch (type) {
      // case 'select':
      //   return (
      //     <select {...field} >
      //       <option value="" disabled>
      //         {placeholder}
      //       </option>
      //     </select>
      //   );
      case 'checkbox':
        return <S.InfoInputCheckbox {...field} type="checkbox" id={name} />;
      default:
        return (
          <S.InfoInputText {...field} type={type} placeholder={placeholder} />
        );
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <S.InputContainer>
          {index ? renderInputProjectInformation(field) : renderInput(field)}
          {hasError && (
            <S.FormError>{String(errors[name]?.message)}</S.FormError>
          )}
        </S.InputContainer>
      )}
    />
  );
};

export default Input;

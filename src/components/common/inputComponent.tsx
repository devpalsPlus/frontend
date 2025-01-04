import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import * as S from '../../pages/createProject/CreateProject.styled';

type InputProps = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  errors: FieldErrors;
  type?: 'text' | 'date' | 'textarea' | 'select' | 'number' | string;
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

  const renderInput = (field: any) => {
    switch (type) {
      case 'date':
        return (
          <S.DateInput name={name} type="date" placeholder={placeholder} />
        );

      case 'textarea':
        return <S.TextArea {...field} placeholder={placeholder} />;

      case 'select':

      default:
        return <S.Input {...field} type={type} placeholder={placeholder} />;
    }
  };

  const renderInputProjectInformation = (field: any) => {
    if (index) {
      switch (type) {
        case 'text':
          return (
            <S.InfoInputText
              {...field}
              name={name}
              type="text"
              placeholder={placeholder}
            />
          );
        case 'select':
          return (
            <select {...field}>
              <option value="" disabled>
                {placeholder}
              </option>
            </select>
          );
        case 'number':
          return (
            <S.InfoInputText
              {...field}
              name={name}
              type="number"
              placeholder={placeholder}
            />
          );
        case 'checkbox':
          return <S.InfoInputCheckbox {...field} type="checkbox" id={name} />;
      }
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

import React from 'react';
import { Controller, Control } from 'react-hook-form';
import * as S from '../../pages/apply/Apply.styled';

interface CareerInputListProps {
  control: Control<any>;
  index: number;
  field: any;
  placeholder?: string;
  name: string;
  type?: 'text' | 'date';
}

export const CareerInputList = ({
  control,
  index,
  name,
  placeholder,
  type,
}: CareerInputListProps) => {
  return (
    <Controller
      control={control}
      name={`careers.${index}.${name}`}
      render={({ field }) => (
        <S.CareerInput {...field} type={type} placeholder={placeholder} />
      )}
    />
  );
};

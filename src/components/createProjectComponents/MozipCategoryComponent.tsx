import React from 'react';
import * as S from './MozipCategory.styled';
import { FieldErrors } from 'react-hook-form';
import { PROJECT_POSITION } from '../../constants/homeConstants';

interface MozipCategoryComponentProps {
  selectedMethod: number[];
  setSelectedMethod: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: any;
}

const MozipCategoryComponent = ({
  selectedMethod,
  setSelectedMethod,
  errors,
  name,
  setValue,
}: MozipCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  const handleLanguageClick = (idx: number) => {
    setSelectedMethod((prev) => {
      const isAlreadySelected = prev.some((item) => item === idx);

      const updated = isAlreadySelected
        ? prev.filter((item) => item !== idx)
        : [...prev, idx];

      setValue(name, updated);
      return updated;
    });
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        {PROJECT_POSITION.map((data, idx) => {
          const isSelected = selectedMethod.some((item) => item === idx);
          return (
            <S.CategoryItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleLanguageClick(idx)}
            >
              <span className='name'>{data}</span>
            </S.CategoryItem>
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default MozipCategoryComponent;

import React from 'react';
import * as S from './MozipCategory.styled';
import { FieldErrors } from 'react-hook-form';
import { CATEGORY } from '../../constants';

interface MozipCategoryComponentProps {
  selectedMethod: string[];
  setSelectedMethod: React.Dispatch<React.SetStateAction<string[]>>;
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

  const handleLanguageClick = (label: string) => {
    setSelectedMethod((prev) => {
      const isAlreadySelected = prev.some((item) => item === label);

      const updated = isAlreadySelected
        ? prev.filter((item) => item !== label)
        : [...prev, label];

      setValue(name, updated);
      return updated;
    });
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        {/* 임시 데이터 */}
        {CATEGORY.map((data, idx) => {
          const isSelected = selectedMethod.some((item) => item === data.label);
          return (
            <S.CategoryItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleLanguageClick(data.label)}
            >
              <span className="name">{data.label}</span>
            </S.CategoryItem>
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default MozipCategoryComponent;

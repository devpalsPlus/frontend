import React from 'react';
import * as S from './MozipCategory.styled';
import { FieldErrors } from 'react-hook-form';
import { CATEGORY } from '../../constants';

interface MozipCategoryComponentProps {
  selectedMethod: { id: string; label: string }[];
  setSelectedMethod: React.Dispatch<
    React.SetStateAction<{ id: string; label: string }[]>
  >;
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

  const handleLanguageClick = (category: { id: string; label: string }) => {
    setSelectedMethod((prev) => {
      const isAlreadySelected = prev.some((item) => item.id === category.id);

      if (isAlreadySelected) {
        return prev.filter((item) => item.id !== category.id);
      } else {
        setValue('languages', selectedMethod);
        return [...prev, category];
      }
    });
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        {/* 임시 데이터 */}
        {CATEGORY.map((data, idx) => {
          const isSelected = selectedMethod.some((item) => item.id === data.id);
          return (
            <S.CategoryItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleLanguageClick(data)}
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

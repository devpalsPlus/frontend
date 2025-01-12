import React from 'react';
import * as S from './MozipCategory.styled';
import { FieldErrors } from 'react-hook-form';
import { PROJECT_POSITION } from '../../constants/homeConstants';
import { handleClick } from '../../util/handleClick.util';

interface MozipCategoryComponentProps {
  selectedMozip: number[];
  setSelectedMozip: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: any;
}

const MozipCategoryComponent = ({
  selectedMozip,
  setSelectedMozip,
  errors,
  name,
  setValue,
}: MozipCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  return (
    <S.Container>
      <S.CategoryContainer>
        {PROJECT_POSITION.map((data, idx) => {
          const isSelected = selectedMozip.some((item) => item === idx);
          return (
            <S.CategoryItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleClick(idx, setValue, name, setSelectedMozip)}
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

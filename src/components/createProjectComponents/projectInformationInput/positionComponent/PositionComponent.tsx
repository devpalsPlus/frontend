import React from 'react';
import * as S from './PositionComponent.styled';
import { FieldErrors } from 'react-hook-form';
import { PROJECT_POSITION } from '../../../../constants/homeConstants';
import { handleClick } from '../../../../util/handleClick.util';

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
        {PROJECT_POSITION.map((position, idx) => {
          const isSelected = selectedMozip.some((item) => item === idx + 1);
          return (
            <S.PositionButtonFeat
              position={position}
              isSelected={isSelected}
              onClick={() =>
                handleClick(idx + 1, setValue, name, setSelectedMozip)
              }
              key={idx + 1}
            />
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default MozipCategoryComponent;

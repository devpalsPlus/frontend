import React from 'react';
import * as S from './PositionComponent.styled';
import { FieldErrors } from 'react-hook-form';
import { handleClick } from '../../../../util/handleClick.util';
import { PositionTag } from '../../../../models/tags';

interface MozipCategoryComponentProps {
  selectedMozip: number[];
  setSelectedMozip: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: any;
  positionTagsData: PositionTag[];
}

const MozipCategoryComponent = ({
  selectedMozip,
  setSelectedMozip,
  errors,
  name,
  setValue,
  positionTagsData,
}: MozipCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  return (
    <S.Container>
      <S.CategoryContainer>
        {positionTagsData.map((position, idx) => {
          const isSelected = selectedMozip.some((item) => item === idx + 1);
          return (
            <S.PositionButtonFeat
              position={position.name}
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

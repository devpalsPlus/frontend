import React, { useEffect } from 'react';
import * as S from './PositionComponent.styled';
import { FieldErrors } from 'react-hook-form';
import { PositionTag } from '../../../../models/tags';
import { ProjectPositionTag } from '../../../../models/projectDetail';

interface MozipCategoryComponentProps {
  selectedMozip: number[];
  setSelectedMozip: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: any;
  positionTagsData: PositionTag[];
  apiDataPosition: ProjectPositionTag[] | undefined;
}

const MozipCategoryComponent = ({
  selectedMozip,
  setSelectedMozip,
  errors,
  name,
  setValue,
  positionTagsData,
  apiDataPosition,
}: MozipCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  const handleClick = (idx: number) => {
    setSelectedMozip((prev) => {
      const isAlreadySelected = prev.some((item) => item === idx);

      const updated = isAlreadySelected
        ? prev.filter((item) => item !== idx)
        : [...prev, idx];

      setValue('position', updated);
      return updated;
    });
  };

  useEffect(() => {
    const positionTagIdList: number[] = [];
    apiDataPosition?.map((tag) => {
      positionTagIdList.push(tag.positionTagId);
    });
    setSelectedMozip(positionTagIdList);
    setValue('position', positionTagIdList);
  }, [apiDataPosition]);

  return (
    <S.Container>
      <S.CategoryContainer>
        {positionTagsData.map((position, idx) => {
          const isSelected = selectedMozip.some((item) => item === idx + 1);
          return (
            <S.PositionButtonFeat
              position={position.name}
              isSelected={isSelected}
              onClick={() => handleClick(idx + 1)}
              key={idx + 1}
              isHover={true}
            />
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default MozipCategoryComponent;

import * as S from './PositionComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import { PositionTag } from '../../../../models/tags';
import useTagSelectors from '../../../../hooks/ProjectHooks/useTagSelectors';
import { CreateProjectFormValues } from '../../../../models/createProject';

interface MozipCategoryComponentProps {
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  positionTagsData: PositionTag[];
  apiDataPosition: PositionTag[] | undefined;
}

const MozipCategoryComponent = ({
  errors,
  name,
  setValue,
  positionTagsData,
  apiDataPosition,
}: MozipCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  const { selectedTag, handleClick } = useTagSelectors({
    apiTagData: apiDataPosition,
    setValue,
    fieldName: 'position',
  });

  return (
    <S.Container>
      <S.CategoryContainer>
        {positionTagsData.map((position, idx) => {
          const isSelected = selectedTag.some((item) => item === idx + 1);
          return (
            <S.PositionButtonFeat
              position={position.name}
              isSelected={isSelected}
              onClick={(e) => handleClick(e, idx + 1)}
              key={idx + 1}
              isHover={true}
              fontSize={true}
            />
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default MozipCategoryComponent;

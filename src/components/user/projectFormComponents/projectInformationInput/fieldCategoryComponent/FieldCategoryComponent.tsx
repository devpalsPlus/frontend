import useTagSelectors from '../../../../../hooks/user/ProjectHooks/useTagSelectors';
import { CreateProjectFormValues } from '../../../../../models/createProject';
import { MethodTag } from '../../../../../models/tags';
import * as S from './FieldCategoryComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';

interface FieldCategoryComponentProps {
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  methodTagsData: MethodTag[] | undefined;
  apiDataMethodId?: number;
}

const FieldCategoryComponent = ({
  errors,
  name,
  setValue,
  methodTagsData,
  apiDataMethodId,
}: FieldCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  const { selectedTag, handleClick } = useTagSelectors({
    apiTagData: apiDataMethodId,
    setValue,
    fieldName: 'field',
  });

  return (
    <S.Container>
      <S.CategoryContainer>
        {methodTagsData?.map((data, idx) => {
          return (
            <S.CategoryItem
              key={idx}
              $isSelected={selectedTag[0] === idx}
              onClick={(e) => handleClick(e, idx)}
            >
              <S.NameSpan type='button' $isSelected={selectedTag[0] === idx}>
                {data.name}
              </S.NameSpan>
            </S.CategoryItem>
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default FieldCategoryComponent;

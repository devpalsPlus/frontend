import * as S from './FieldCategoryComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../../../models/createProject';
import { MethodTag } from '../../../../models/tags';
import { useEffect } from 'react';

interface FieldCategoryComponentProps {
  selectedMethod: number;
  setSelectedMethod: React.Dispatch<React.SetStateAction<number>>;
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  methodTagsData: MethodTag[];
  apiDataMethodId?: number;
}

const FieldCategoryComponent = ({
  selectedMethod,
  setSelectedMethod,
  errors,
  name,
  setValue,
  methodTagsData,
  apiDataMethodId,
}: FieldCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  const handleClick = (idx: number) => {
    setSelectedMethod(idx);
    setValue('field', idx + 1);
  };

  useEffect(() => {
    if (apiDataMethodId) {
      setSelectedMethod(apiDataMethodId);
      setValue('field', apiDataMethodId);
    }
  }, [apiDataMethodId]);

  return (
    <S.Container>
      <S.CategoryContainer>
        {methodTagsData.map((data, idx) => {
          return (
            <S.CategoryItem
              key={idx}
              isSelected={selectedMethod === idx}
              onClick={() => handleClick(idx)}
            >
              <span className='name'>{data.name}</span>
            </S.CategoryItem>
          );
        })}
      </S.CategoryContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default FieldCategoryComponent;

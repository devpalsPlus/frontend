import * as S from './FieldCategoryComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import { PROJECT_METHOD } from '../../../../constants/homeConstants';
import { handleClick } from '../../../../util/handleClick.util';
import { CreateProjectFormValues } from '../../../../models/createProject';

interface FieldCategoryComponentProps {
  selectedMethod: number[];
  setSelectedMethod: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
}

const FieldCategoryComponent = ({
  selectedMethod,
  setSelectedMethod,
  errors,
  name,
  setValue,
}: FieldCategoryComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  return (
    <S.Container>
      <S.CategoryContainer>
        {PROJECT_METHOD.map((data, idx) => {
          const isSelected = selectedMethod.some((item) => item === idx);
          return (
            <S.CategoryItem
              key={idx}
              isSelected={isSelected}
              onClick={() =>
                handleClick(idx, setValue, name, setSelectedMethod)
              }
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

export default FieldCategoryComponent;

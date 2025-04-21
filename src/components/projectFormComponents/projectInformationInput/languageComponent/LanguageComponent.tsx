import * as S from './LanguageComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { CreateProjectFormValues } from '../../../../models/createProject';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import { useEffect } from 'react';
import { Skill } from '../../../../models/projectDetail';
import useTagSelectors from '../../../../hooks/ProjectHooks/useTagSelectors';

interface LanguageComponentProps {
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  apiDataSkillTags: Skill[] | undefined;
}

const LanguageComponent = ({
  errors,
  name,
  setValue,
  apiDataSkillTags,
}: LanguageComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  const { selectedTag, handleClick } = useTagSelectors({
    apiTagData: apiDataSkillTags,
    setValue,
    fieldName: 'languages',
  });

  return (
    <S.Container onClick={(e) => handleClick(e, 0)}>
      <SkillTagBox width='100%' isCreate={true} selectedTag={selectedTag} />

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

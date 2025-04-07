import * as S from './LanguageComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { CreateProjectFormValues } from '../../../../models/createProject';
import { SkillTag } from '../../../../models/tags';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import { useEffect } from 'react';
import { Skill } from '../../../../models/projectDetail';

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

  const { searchFilters, handleUpdateFilters } = useSaveSearchFiltering();
  const filterData = searchFilters.skillTag;

  const handleSkillClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    const id = Number(
      target.dataset.id || target.closest('[data-id]')?.getAttribute('data-id')
    );
    if (!id) return;

    handleUpdateFilters('skillTag', id);
  };

  useEffect(() => {
    apiDataSkillTags?.forEach((tag) => {
      handleUpdateFilters('skillTag', tag.id);
    });
  }, [apiDataSkillTags]);

  useEffect(() => {
    if (filterData) {
      setValue?.('languages', filterData);
    }
  }, [filterData, setValue]);

  return (
    <S.Container onClick={handleSkillClick}>
      <SkillTagBox width='100%' isCreate={true} />

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

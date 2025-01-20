import * as S from './LanguageComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { CreateProjectFormValues } from '../../../../models/createProject';
import { SkillTag } from '../../../../models/tags';

interface LanguageComponentProps {
  selectedLanguage: number[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  apiDataSkillTags: SkillTag[] | undefined;
}

const LanguageComponent = ({
  selectedLanguage,
  setSelectedLanguage,
  errors,
  name,
  setValue,
  apiDataSkillTags,
}: LanguageComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  return (
    <S.Container>
      <SkillTagBox
        width='100%'
        selectSkills={selectedLanguage}
        setSelectSkills={setSelectedLanguage}
        setValue={setValue}
        apiDataSkillTags={apiDataSkillTags}
      />

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

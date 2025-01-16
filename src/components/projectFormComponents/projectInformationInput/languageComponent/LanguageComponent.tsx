import * as S from './LanguageComponent.styled';
import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { CreateProjectFormValues } from '../../../../models/createProject';

interface LanguageComponentProps {
  selectedLanguage: number[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: UseFormSetValue<CreateProjectFormValues>;
}

const LanguageComponent = ({
  selectedLanguage,
  setSelectedLanguage,
  errors,
  name,
  setValue,
}: LanguageComponentProps) => {
  const hasError = Boolean(errors?.[name]);

  return (
    <S.Container>
      <SkillTagBox
        width='100%'
        selectSkills={selectedLanguage}
        setSelectSkills={setSelectedLanguage}
        setValue={setValue}
      />

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

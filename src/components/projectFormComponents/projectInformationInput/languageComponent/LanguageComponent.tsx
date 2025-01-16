import * as S from './LanguageComponent.styled';
import { FieldErrors } from 'react-hook-form';
import { handleClick } from '../../../../util/handleClick.util';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';

interface LanguageComponentProps {
  selectedLanguage: number[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: any;
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
      {/* <S.LanguagesContainer>
        {skillTagsData.map((lang, idx) => {
          const isSelected = selectedLanguage.some((item) => item === idx + 1);
          return (
            <S.LanguageItem
              key={idx + 1}
              isSelected={isSelected}
              onClick={() =>
                handleClick(idx + 1, setValue, name, setSelectedLanguage)
              }
            >
              <SkillTagImg image={beginner} skillTag={lang.name} />
              <p className='lang'>{lang.name}</p>
            </S.LanguageItem>
          );
        })}
      </S.LanguagesContainer> */}
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

import * as S from './LanguageComponent.styled';
import { FieldErrors } from 'react-hook-form';
import beginner from '/src/assets/beginner.svg';
import { handleClick } from '../../../../util/handleClick.util';
import SkillTagImg from '../../../common/skillTagBox/skillTag/skillTagImg/SkillTagImg';
import { SkillTag } from '../../../../models/tags';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';

interface LanguageComponentProps {
  selectedLanguage: number[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<number[]>>;
  errors: FieldErrors;
  name: string;
  setValue: any;
  skillTagsData: SkillTag[];
}

const LanguageComponent = ({
  selectedLanguage,
  setSelectedLanguage,
  errors,
  name,
  setValue,
  skillTagsData,
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
      <SkillTagBox width='100%' />

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

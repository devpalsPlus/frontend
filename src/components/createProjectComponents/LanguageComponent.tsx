import React from 'react';
import * as S from './LanguageComponent.styled';
import { FieldErrors } from 'react-hook-form';
import beginner from '/src/assets/beginner.svg';
import SkillTag from '../common/skillTagBox/skillTag/SkillTag';
import { PROJECT_SKILL } from '../../constants/homeConstants';
import SkillTagImg from '../common/skillTagBox/skillTag/skillTagImg/SkillTagImg';

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

  const handleLanguageClick = (idx: number) => {
    setSelectedLanguage((prev) => {
      const isAlreadySelected = prev.some((item) => item === idx);

      const updated = isAlreadySelected
        ? prev.filter((item) => item !== idx)
        : [...prev, idx];

      setValue(name, updated);

      return updated;
    });
  };

  return (
    <S.Container>
      <S.LanguagesContainer>
        {PROJECT_SKILL.map((lang, idx) => {
          const isSelected = selectedLanguage.some((item) => item === idx);
          return (
            <S.LanguageItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleLanguageClick(idx)}
            >
              <SkillTagImg image={beginner} skillTag={lang} />
              <p className='lang'>{lang}</p>
            </S.LanguageItem>
          );
        })}
      </S.LanguagesContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

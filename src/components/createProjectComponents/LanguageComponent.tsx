import React from 'react';
import * as S from './LanguageComponent.styled';
import { FieldErrors } from 'react-hook-form';
import { LANGUAGEDATA } from '../../constants';

interface LanguageComponentProps {
  selectedLanguage: string[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string[]>>;
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

  const handleLanguageClick = (lang: string) => {
    setSelectedLanguage((prev) => {
      const isAlreadySelected = prev.some((item) => item === lang);

      const updated = isAlreadySelected
        ? prev.filter((item) => item !== lang)
        : [...prev, lang];

      setValue(name, updated);

      return updated;
    });
  };

  return (
    <S.Container>
      <S.LanguagesContainer>
        {LANGUAGEDATA.map((lang, idx) => {
          const isSelected = selectedLanguage.some(
            (item) => item === lang.language
          );
          return (
            <S.LanguageItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleLanguageClick(lang.language)}
            >
              <span className="icon">{lang.icon}</span>
              <span className="name">{lang.language}</span>
            </S.LanguageItem>
          );
        })}
      </S.LanguagesContainer>

      {hasError && <S.FormError>{String(errors[name]?.message)}</S.FormError>}
    </S.Container>
  );
};

export default LanguageComponent;

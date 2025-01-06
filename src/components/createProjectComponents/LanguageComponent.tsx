import React from 'react';
import * as S from './LanguageComponent.styled';
import { FieldErrors } from 'react-hook-form';
import { LANGUAGEDATA } from '../../constants';

interface LanguageComponentProps {
  selectedLanguage: { language: string; icon: string }[];
  setSelectedLanguage: React.Dispatch<
    React.SetStateAction<{ language: string; icon: string }[]>
  >;
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
  console.log(hasError);

  const handleLanguageClick = (lang: { language: string; icon: string }) => {
    setSelectedLanguage((prev) => {
      const isAlreadySelected = prev.some(
        (item) => item.language === lang.language
      );

      if (isAlreadySelected) {
        return prev.filter((item) => item.language !== lang.language);
      } else {
        setValue('languages', selectedLanguage);
        return [...prev, lang];
      }
    });
  };

  return (
    <S.Container>
      <S.LanguagesContainer>
        {/* 임시 데이터 */}
        {LANGUAGEDATA.map((lang, idx) => {
          const isSelected = selectedLanguage.some(
            (item) => item.language === lang.language
          );
          return (
            <S.LanguageItem
              key={idx}
              isSelected={isSelected}
              onClick={() => handleLanguageClick(lang)}
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

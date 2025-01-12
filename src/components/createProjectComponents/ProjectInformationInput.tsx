import React, { useState } from 'react';
import * as S from '../../pages/createProject/CreateProject.styled';
import { PROJECTDATA } from '../../constants';
import MozipCategoryComponent from './MozipCategoryComponent';
import Input from './inputComponent';
import LanguageComponent from './LanguageComponent';
import FieldCategoryComponent from './FieldCategoryComponent';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../models/createProject';

interface ProjectInformationProps {
  errors: FieldErrors;
  control: Control<CreateProjectFormValues>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
}

const ProjectInformationInput = ({
  errors,
  control,
  setValue,
}: ProjectInformationProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<number[]>([]);
  const [selectedMozip, setSelectedMozip] = useState<number[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<number[]>([]);

  return (
    <>
      {PROJECTDATA.map((input, index) => (
        <>
          <S.InfoRow key={index}>
            <label htmlFor={input.name}>{input.label}</label>
            <Input
              index={input.id}
              control={control}
              errors={errors}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
          </S.InfoRow>
        </>
      ))}

      <S.InfoRow>
        <label htmlFor='field'>진행 방식</label>
      </S.InfoRow>
      <FieldCategoryComponent
        name='field'
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        errors={errors}
        setValue={setValue}
      />

      <S.InfoRow>
        <label htmlFor='position'>모집 분야</label>
      </S.InfoRow>
      <MozipCategoryComponent
        name='position'
        selectedMozip={selectedMozip}
        setSelectedMozip={setSelectedMozip}
        errors={errors}
        setValue={setValue}
      />

      <S.InfoRow>
        <label htmlFor='languages'>사용 언어</label>
      </S.InfoRow>
      <LanguageComponent
        name='languages'
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        errors={errors}
        setValue={setValue}
      />
    </>
  );
};

export default ProjectInformationInput;

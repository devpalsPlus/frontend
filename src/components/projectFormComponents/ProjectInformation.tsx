import { useState } from 'react';
import * as S from '../../pages/createProject/CreateProject.styled';
import { PROJECT_DATA } from '../../constants';
import FieldCategoryComponent from './FieldCategoryComponent';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../models/createProject';
import Input from '../inputComponent/inputComponent';
import MozipCategoryComponent from './projectInformationInput/positionComponent/PositionComponent';
import LanguageComponent from './projectInformationInput/languageComponent/LanguageComponent';

interface ProjectInformationProps {
  errors: FieldErrors;
  control: Control<CreateProjectFormValues>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
}

const ProjectInformation = ({
  errors,
  control,
  setValue,
}: ProjectInformationProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<number[]>([]);
  const [selectedMozip, setSelectedMozip] = useState<number[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<number[]>([]);

  return (
    <>
      {PROJECT_DATA.map((input, index) => (
        <>
          <S.InfoRow key={index}>
            <label htmlFor={input.name}>{input.label}</label>
            <Input
              index={index}
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

export default ProjectInformation;

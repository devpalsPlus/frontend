import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import MozipCategoryComponent from './positionComponent/PositionComponent';
import LanguageComponent from './languageComponent/LanguageComponent';
import FieldCategoryComponent from './fieldCategoryComponent/FieldCategoryComponent';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { PROJECT_DATA } from '../../../constants/projectConstants';
import { CreateProjectFormValues } from '../../../models/createProject';
import * as S from './ProjectInformationInput.styled';
import Input from '../inputComponent/inputComponent';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import { ProjectDetailExtended } from '../../../models/projectDetail';

interface ProjectInformationProps {
  errors: FieldErrors;
  control: Control<CreateProjectFormValues>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  apiData?: ProjectDetailExtended;
  isSubmit?: boolean;
  setIsSubmit?: Dispatch<SetStateAction<boolean>>;
}

const ProjectInformationInput = ({
  errors,
  control,
  setValue,
  apiData,
  isSubmit,
  setIsSubmit,
}: ProjectInformationProps) => {
  const [selectedMozip, setSelectedMozip] = useState<number[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<number>(0);

  const { positionTagsData, methodTagsData } = useSearchFilteringSkillTag();

  useEffect(() => {
    if (isSubmit) {
      setSelectedMozip([]);
      setSelectedMethod(0);
    }
  }, [isSubmit, setIsSubmit]);

  return (
    <>
      {PROJECT_DATA.map((input, index) => (
        <>
          <S.InfoRow key={index}>
            <label htmlFor={input.name}>{input.label}</label>
            <Input
              indexInfo={input.id}
              control={control}
              errors={errors}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
            {input.type === 'checkbox' && (
              <S.welcomeSprout>"새싹 멤버도 환영해요 !!"</S.welcomeSprout>
            )}
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
        methodTagsData={methodTagsData}
        apiDataMethodId={apiData?.Method.id}
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
        positionTagsData={positionTagsData}
        apiDataPosition={apiData?.ProjectPositionTag}
      />

      <S.InfoRow>
        <label htmlFor='languages'>사용 언어</label>
      </S.InfoRow>
      <LanguageComponent
        name='languages'
        errors={errors}
        setValue={setValue}
        apiDataSkillTags={apiData?.skillTags}
      />
    </>
  );
};

export default ProjectInformationInput;

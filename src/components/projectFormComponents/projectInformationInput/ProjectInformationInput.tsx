import MozipCategoryComponent from './positionComponent/PositionComponent';
import LanguageComponent from './languageComponent/LanguageComponent';
import FieldCategoryComponent from './fieldCategoryComponent/FieldCategoryComponent';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { PROJECT_DATA } from '../../../constants/projectConstants';
import { CreateProjectFormValues } from '../../../models/createProject';
import * as S from './ProjectInformationInput.styled';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import { ProjectDetailPlusExtended } from '../../../models/projectDetail';
import Input from '../inputComponent/InputComponent';

interface ProjectInformationProps {
  errors: FieldErrors;
  control: Control<CreateProjectFormValues>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
  apiData?: ProjectDetailPlusExtended;
}

const ProjectInformationInput = ({
  errors,
  control,
  setValue,
  apiData,
}: ProjectInformationProps) => {
  const { positionTagsData, methodTagsData } = useSearchFilteringSkillTag();

  return (
    <>
      {PROJECT_DATA.map((input, index) => (
        <>
          <S.InfoRow key={index}>
            <S.InfoLabel htmlFor={input.name}>{input.label}</S.InfoLabel>
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
        <S.InfoLabel htmlFor='field'>진행 방식</S.InfoLabel>
      </S.InfoRow>
      <FieldCategoryComponent
        name='field'
        errors={errors}
        setValue={setValue}
        methodTagsData={methodTagsData}
        apiDataMethodId={apiData?.methodType.id}
      />

      <S.InfoRow>
        <S.InfoLabel htmlFor='position'>모집 분야</S.InfoLabel>
      </S.InfoRow>
      <MozipCategoryComponent
        name='position'
        errors={errors}
        setValue={setValue}
        positionTagsData={positionTagsData}
        apiDataPosition={apiData?.positions}
      />

      <S.InfoRow>
        <S.InfoLabel htmlFor='languages'>사용 언어</S.InfoLabel>
      </S.InfoRow>
      <LanguageComponent
        name='languages'
        errors={errors}
        setValue={setValue}
        apiDataSkillTags={apiData?.skills}
      />
    </>
  );
};

export default ProjectInformationInput;

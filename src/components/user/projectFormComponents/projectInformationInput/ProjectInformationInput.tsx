import MozipCategoryComponent from './positionComponent/PositionComponent';
import LanguageComponent from './languageComponent/LanguageComponent';
import FieldCategoryComponent from './fieldCategoryComponent/FieldCategoryComponent';
import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';
import * as S from './ProjectInformationInput.styled';
import Input from '../inputComponent/InputComponent';
import type { ProjectDetailPlusExtended } from '../../../../models/projectDetail';
import type { CreateProjectFormValues } from '../../../../models/createProject';
import { useSearchFilteringTags } from '../../../../hooks/user/useSearchFilteringTags';
import { PROJECT_DATA } from '../../../../constants/user/projectConstants';

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
  const { positionTagsData, methodTagsData } = useSearchFilteringTags();

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
              <S.welcomeSprout>
                새싹 멤버를 환영한다면 체크를 눌러주세요!!
              </S.welcomeSprout>
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

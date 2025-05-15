import { PROJECT_DATA_GET } from '../../../../constants/user/projectConstants';
import {
  ProjectDetailPlus,
  ProjectDetailPlusExtended,
} from '../../../../models/projectDetail';
import { formatDate } from '../../../../util/formatDate';
import * as S from './ProjectInformation.styled';
import beginner from '/src/assets/beginner.svg';

interface ProjectInformationProps {
  data: ProjectDetailPlusExtended;
}

const ProjectInformation = ({ data }: ProjectInformationProps) => {
  data.startDate = formatDate(data.startDate);

  return (
    <S.SectionInput>
      <S.InfoRow>
        {data.isBeginner && <S.BeginnerIcon src={beginner} alt='초보자 환영' />}
        {data.isBeginner && (
          <S.BeginnerText>새싹 멤버(초보)도 환영해요!</S.BeginnerText>
        )}
      </S.InfoRow>

      {PROJECT_DATA_GET.map((input, index) => (
        <S.InfoRow key={index}>
          <S.InfoLabel>{input.label}</S.InfoLabel>
          <S.InfoText>{data[input.name as keyof ProjectDetailPlus]}</S.InfoText>
        </S.InfoRow>
      ))}

      <S.InfoRow>
        <S.InfoLabel>모집 분야</S.InfoLabel>
        <S.InfoText>
          {data.positions.map((position) => position.name).join(', ')}
        </S.InfoText>
      </S.InfoRow>

      <S.InfoRow>
        <S.InfoLabel>진행 방식</S.InfoLabel>
        <S.InfoText>{data.methodType.name}</S.InfoText>
      </S.InfoRow>

      <S.InfoRow>
        <S.InfoLabel>사용 언어</S.InfoLabel>
        <S.SkillTagContainer>
          {data.skills.map((skillTag) => (
            <S.SkillTagImage key={skillTag.id}>
              <img key={skillTag.id} src={skillTag.img} alt={skillTag.name} />
              <S.InfoText>{skillTag.name}</S.InfoText>
            </S.SkillTagImage>
          ))}
        </S.SkillTagContainer>
      </S.InfoRow>
    </S.SectionInput>
  );
};

export default ProjectInformation;

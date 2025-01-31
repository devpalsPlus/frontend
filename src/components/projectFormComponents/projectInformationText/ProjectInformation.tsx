import * as S from './ProjectInformation.styled';
import { PROJECT_DATA_GET } from '../../../constants/projectConstants';
import beginner from '/src/assets/beginner.svg';
import {
  ProjectDetail,
  ProjectDetailExtended,
} from '../../../models/projectDetail';
import { formatDate } from '../../../util/format';

interface ProjectInformationProps {
  data: ProjectDetailExtended;
}

const ProjectInformation = ({ data }: ProjectInformationProps) => {
  data.startDate = formatDate(data.startDate);

  return (
    <S.SectionInput>
      <S.InfoRow>
        {data.isBeginner && <S.BeginnerIcon src={beginner} alt='초보자 환영' />}
        {data.isBeginner && <S.BeginnerText>초보 환영</S.BeginnerText>}
      </S.InfoRow>

      {PROJECT_DATA_GET.map((input, index) => (
        <S.InfoRow key={index}>
          <S.InfoLabel>{input.label}</S.InfoLabel>
          <S.InfoText>{data[input.name as keyof ProjectDetail]}</S.InfoText>
        </S.InfoRow>
      ))}

      <S.InfoRow>
        <S.InfoLabel>모집 분야</S.InfoLabel>
        <S.InfoText>
          {data.ProjectPositionTag.map(
            (position) => position.PositionTag.name
          ).join(', ')}
        </S.InfoText>
      </S.InfoRow>

      <S.InfoRow>
        <S.InfoLabel>진행 방식</S.InfoLabel>
        <S.InfoText>{data.Method.name}</S.InfoText>
      </S.InfoRow>

      <S.InfoRow>
        <S.InfoLabel>사용 언어</S.InfoLabel>
        <S.SkillTagContainer>
          {data.ProjectSkillTag.map((skillTag) => (
            <S.SkillTagImage>
              <img
                key={skillTag.SkillTag.id}
                src={skillTag.SkillTag.img}
                alt={skillTag.SkillTag.name}
              />
              <S.InfoText>{skillTag.SkillTag.name}</S.InfoText>
            </S.SkillTagImage>
          ))}
        </S.SkillTagContainer>
      </S.InfoRow>
    </S.SectionInput>
  );
};

export default ProjectInformation;

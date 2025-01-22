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
        {data.isBeginner && <p>초보 환영</p>}
      </S.InfoRow>

      {PROJECT_DATA_GET.map((input, index) => (
        <S.InfoRow key={index}>
          <label htmlFor={input.name}>{input.label}</label>
          <p>{data[input.name as keyof ProjectDetail]}</p>
        </S.InfoRow>
      ))}

      <S.InfoRow>
        <label htmlFor='position'>모집 분야</label>
        <p>
          {data.ProjectPositionTag.map(
            (position) => position.PositionTag.name
          ).join(', ')}
        </p>
      </S.InfoRow>

      <S.InfoRow>
        <label htmlFor='method'>진행 방식</label>
        <p>{data.Method.name}</p>
      </S.InfoRow>

      <S.InfoRow>
        <label htmlFor='languages'>사용 언어</label>
      </S.InfoRow>
      <S.SkillTagContainer>
        {data.ProjectSkillTag.map((skillTag) => (
          <S.SkillTagImage>
            <img
              key={skillTag.SkillTag.id}
              src={skillTag.SkillTag.img}
              alt={skillTag.SkillTag.name}
            />
            <p>{skillTag.SkillTag.name}</p>
          </S.SkillTagImage>
        ))}
      </S.SkillTagContainer>
    </S.SectionInput>
  );
};

export default ProjectInformation;

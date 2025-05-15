import { useProjectStatistic } from '../../../hooks/useProjectStatistic';
import ProjectStat from './projectStat/ProjectStat';
import * as S from './ProjectStats.styled';

export default function ProjectStats() {
  const { projectStatData } = useProjectStatistic();

  return (
    <S.Container>
      <S.Wrapper>
        {projectStatData.map((data) => (
          <ProjectStat
            title={data.label}
            count={data.count}
            key={`projectStat-${data.label}`}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

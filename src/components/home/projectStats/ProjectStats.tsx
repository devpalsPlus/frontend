import { PROJECT_STATS_TITLE } from '../../../constants/homeConstants';
import ProjectStat from './projectStat/ProjectStat';
import * as S from './ProjectStats.styled';

export default function ProjectStats() {
  return (
    <S.Container>
      <S.Wrapper>
        {PROJECT_STATS_TITLE.map((title) => (
          <ProjectStat title={title} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

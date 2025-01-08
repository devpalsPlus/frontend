import { PROJECT_STATS_TITLE } from '../../../constants/homeConstants';
import ProjectStat from './projectStat/ProjectStat';
import * as S from './ProjectStats.styled';
import { v4 as uuid } from 'uuid';

export default function ProjectStats() {
  return (
    <S.Container>
      <S.Wrapper>
        {PROJECT_STATS_TITLE.map((title) => (
          <ProjectStat title={title} key={uuid()} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

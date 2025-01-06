import { PROJECT_STATS_TITLE } from '../../../constants/homeConstants';
import ProjectStat from './projectStat/ProjectStat';
import * as S from './ProjectStats.styled';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectStats() {
  return (
    <S.Container>
      <S.Wrapper>
        {PROJECT_STATS_TITLE.map((title) => (
          <ProjectStat title={title} key={uuidv4()} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

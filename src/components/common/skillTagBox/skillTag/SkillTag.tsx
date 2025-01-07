import * as S from './SkillTag.styled';
import beginner from '../../../../assets/beginner.svg';
import { v4 as uuidv4 } from 'uuid';

interface SkillTagProps {
  skillTags: string[];
}

export default function SkillTag({ skillTags }: SkillTagProps) {
  return (
    <S.Container>
      {skillTags.map((skillTag) => (
        <S.Wrapper key={uuidv4()}>
          <img src={beginner} alt={skillTag} />
          {skillTag}
        </S.Wrapper>
      ))}
    </S.Container>
  );
}

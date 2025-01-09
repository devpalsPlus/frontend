import * as S from './SkillTag.styled';
import beginner from '../../../../assets/beginner.svg';
import { v4 as uuid } from 'uuid';
import SkillTagImg from './skillTagImg/SkillTagImg';

interface SkillTagProps {
  skillTags: string[];
}

export default function SkillTag({ skillTags }: SkillTagProps) {
  return (
    <S.Container>
      {skillTags.map((skillTag) => (
        <S.Wrapper key={uuid()}>
          <SkillTagImg image={beginner} skillTag={skillTag} />
          {skillTag}
        </S.Wrapper>
      ))}
    </S.Container>
  );
}

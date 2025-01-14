import * as S from './SkillTag.styled';
import SkillTagImg from './skillTagImg/SkillTagImg';
import type { SkillTag } from '../../../../models/tags';

interface SkillTagProps {
  skillTagData: SkillTag;
}

export default function SkillTag({ skillTagData }: SkillTagProps) {
  return (
    <S.Container>
      <SkillTagImg image={skillTagData.img} skillTag={skillTagData.name} />
      {skillTagData.name}
    </S.Container>
  );
}

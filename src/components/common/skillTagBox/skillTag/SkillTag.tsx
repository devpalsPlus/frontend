import * as S from './SkillTag.styled';
import SkillTagImg from './skillTagImg/SkillTagImg';
import type { SkillTag } from '../../../../models/tags';

interface SkillTagProps {
  skillTagData: SkillTag;
  $select: boolean;
}

export default function SkillTag({ skillTagData, $select }: SkillTagProps) {
  return (
    <S.Wrapper $select={$select} data-id={skillTagData.id}>
      <SkillTagImg
        image={skillTagData.img}
        skillTag={skillTagData.name}
        $select={$select}
        skillTagId={skillTagData.id}
      />
      {skillTagData.name}
    </S.Wrapper>
  );
}

import type { SkillTag as TSkillTag } from '../../../models/tags';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';

export interface SkillTagBoxProps {
  width: string;
  skillTagsData: TSkillTag[];
}

export default function SkillTagBox({
  width,
  skillTagsData,
}: SkillTagBoxProps) {
  return (
    <S.Container width={width}>
      {skillTagsData?.map((skillTagData) => (
        <SkillTag skillTagData={skillTagData} key={skillTagData.id} />
      ))}
    </S.Container>
  );
}

import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';

export interface SkillTagBoxProps {
  width: string;
}

export default function SkillTagBox({ width }: SkillTagBoxProps) {
  const { skillTagsData } = useSearchFilteringSkillTag();

  return (
    <S.Container width={width}>
      {skillTagsData?.map((skillTagData) => (
        <SkillTag skillTagData={skillTagData} key={skillTagData.id} />
      ))}
    </S.Container>
  );
}

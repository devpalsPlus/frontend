import { PROJECT_SKILL } from '../../../constants/homeConstants';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';

export default function SkillTagBox() {
  return (
    <S.Container>
      <SkillTag skillTags={[...PROJECT_SKILL]} />
    </S.Container>
  );
}

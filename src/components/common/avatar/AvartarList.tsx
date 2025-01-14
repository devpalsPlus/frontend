import * as S from './AvatarList.styled';
import { ProjectSkillTag } from '../../../models/manageMyProject';
import Avatar from './Avatar';
interface AvartarListProps {
  avatars: ProjectSkillTag[] | null;
  size?: string;
}

function AvartarList({ avatars, size = '33px' }: AvartarListProps) {
  if (!avatars) return;
  return (
    <S.Wrapper>
      {avatars.map((avatar) => (
        <Avatar size={size} image={avatar.SkillTag.img} />
      ))}
    </S.Wrapper>
  );
}

export default AvartarList;

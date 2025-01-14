import * as S from './AvatarList.styled';
import { SkillTag } from '../../../models/manageMyProject';
import Avatar from './Avatar';
interface AvartarListProps {
  avatars: SkillTag[] | null;
  size?: string;
}

function AvartarList({ avatars, size = '33px' }: AvartarListProps) {
  if (!avatars) return;

  return (
    <S.Wrapper>
      {avatars.map((avatar) => (
        <Avatar size={size} image={avatar.img} />
      ))}
    </S.Wrapper>
  );
}

export default AvartarList;

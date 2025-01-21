import * as S from './AvatarList.styled';
import { ProjectSkillTag } from '../../../models/manageMyProject';
import Avatar from './Avatar';
import { UserSkillTag } from '../../../models/applicant';
export interface AvartarListProps {
  avatars: ProjectSkillTag[] | UserSkillTag[] | null;
  size?: string;
  maxCount?: number;
}

function AvartarList({
  avatars,
  size = '33px',
  maxCount = 8,
}: AvartarListProps) {
  if (!avatars) return;
  const displayAvatars = avatars.slice(0, maxCount);

  return (
    <S.Wrapper>
      {displayAvatars.map((avatar) => (
        <Avatar
          key={avatar.skillTagId}
          size={size}
          image={avatar.SkillTag.img}
        />
      ))}
    </S.Wrapper>
  );
}

export default AvartarList;

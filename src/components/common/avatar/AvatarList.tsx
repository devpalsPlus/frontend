import * as S from './AvatarList.styled';
import Avatar from './Avatar';
import { formatImgPath } from '../../../util/formatImgPath';
import { SkillTag } from '../../../models/tags';
export interface AvatarListProps {
  avatars: SkillTag[] | null;
  size?: string;
  maxCount?: number;
}

function AvatarList({ avatars, size = '33px', maxCount = 8 }: AvatarListProps) {
  if (!avatars) return;
  const displayAvatars = avatars.slice(0, maxCount);

  return (
    <S.Wrapper>
      {displayAvatars.map((avatar) => (
        <Avatar
          key={avatar.id}
          size={size}
          image={`${import.meta.env.VITE_APP_IMAGE_CDN_URL}/${formatImgPath(
            avatar.img
          )}?w=62&h=62&fit=crop&crop=entropy&q=60`}
        />
      ))}
    </S.Wrapper>
  );
}

export default AvatarList;

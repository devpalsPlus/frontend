import { ReactNode } from 'react';
import * as S from './Avatar.styled';
import defaultImg from '../../../assets/defaultImg.png';

export interface AvatarProps {
  size: string;
  image: string | ReactNode;
}

function Avatar({ size, image }: AvatarProps) {
  const releasedImg =
    typeof image === 'string' && image.trim() ? image : defaultImg;
  return (
    <S.AvatarContainer size={size}>
      {typeof image === 'string' || !image ? (
        <S.AvatarImg src={releasedImg} alt='Avatar' />
      ) : (
        image
      )}
    </S.AvatarContainer>
  );
}

export default Avatar;

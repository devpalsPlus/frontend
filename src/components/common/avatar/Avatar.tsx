import { ReactNode } from 'react';
import * as S from './Avatar.styled';
import defaultImg from '../../../assets/defaultImg.png';

export interface AvatarProps {
  size: string;
  image: string | ReactNode;
  alt?: string;
}

function Avatar({ size, image, alt = '사용자 프로필 이미지' }: AvatarProps) {
  const releasedImg =
    typeof image === 'string' && image.trim() ? image : defaultImg;
  return (
    <S.AvatarContainer size={size}>
      {typeof image === 'string' || !image ? (
        <S.AvatarImg src={releasedImg} alt={alt} />
      ) : (
        image
      )}
    </S.AvatarContainer>
  );
}

export default Avatar;

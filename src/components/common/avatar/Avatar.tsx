import { ReactNode } from 'react';
import * as S from './Avatar.styled';
import defaultImg from '../../../assets/defaultImg.png';
import MainLogo from '../../../assets/mainlogo.svg';

export interface AvatarProps {
  size: string;
  image: string | ReactNode;
}

function Avatar({ size, image }: AvatarProps) {
  const isMainLogo = image === MainLogo;
  const releasedImg =
    typeof image === 'string' && image.trim() ? image : defaultImg;
  return (
    <S.AvatarContainer size={size} $isMainLogo={isMainLogo}>
      {typeof image === 'string' || !image ? (
        <img className='avatar' src={releasedImg} alt='Avatar' />
      ) : (
        image
      )}
    </S.AvatarContainer>
  );
}

export default Avatar;

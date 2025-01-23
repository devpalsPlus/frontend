import { ReactNode } from 'react';
import * as S from './Avatar.styled';
import DefaultImg from '../../../assets/defaultImg.png';

export interface AvatarProps {
  size: string;
  image: string | ReactNode;
}

function Avatar({ size, image = <img src={DefaultImg} /> }: AvatarProps) {
  return (
    <S.AvatarContainer size={size}>
      {typeof image === 'string' ? (
        <img className='avatar' src={image} alt='Avatar' />
      ) : (
        image
      )}
    </S.AvatarContainer>
  );
}

export default Avatar;

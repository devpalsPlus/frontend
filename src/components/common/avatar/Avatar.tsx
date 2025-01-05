import React, { ReactNode } from 'react';
import * as S from './Avatar.styled';

export interface AvatarProps {
  size: string;
  image: string | ReactNode;
}

function Avatar({ size, image }: AvatarProps) {
  return (
    <S.AvatarContainer size={size}>
      {typeof image === 'string' ? (
        <img className="avatar" src={image} alt="Avatar" />
      ) : (
        image
      )}
    </S.AvatarContainer>
  );
}

export default Avatar;

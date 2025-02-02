import styled from 'styled-components';
import { AvatarProps } from './Avatar';

interface AvatarContainerProps extends Omit<AvatarProps, 'image'> {
  $isMainLogo?: boolean;
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ $isMainLogo }) => ($isMainLogo ? '0' : '50%')};
  border: ${({ $isMainLogo, theme }) =>
    $isMainLogo ? 'none' : `1px solid ${theme.color.border}`};

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: ${({ $isMainLogo }) => ($isMainLogo ? '0' : '50%')};
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    width: calc(${({ size }) => size} * 0.85);
    height: calc(${({ size }) => size} * 0.85);
  }
`;

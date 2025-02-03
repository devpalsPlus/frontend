import styled from 'styled-components';
import { AvatarProps } from './Avatar';

export const AvatarContainer = styled.div<Omit<AvatarProps, 'image'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.border};

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    width: calc(${({ size }) => size} * 0.85);
    height: calc(${({ size }) => size} * 0.85);
  }
`;

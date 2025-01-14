import styled from 'styled-components';
import { AvatarProps } from './Avatar';

export const AvatarContainer = styled.div<Omit<AvatarProps, 'image'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

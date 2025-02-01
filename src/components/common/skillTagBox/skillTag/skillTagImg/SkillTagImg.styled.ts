import styled from 'styled-components';
import { SkillTagImgProps } from './SkillTagImg';

export const Wrapper = styled.div<Pick<SkillTagImgProps, '$select'>>`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
`;

export const SkillImg = styled.img<Pick<SkillTagImgProps, '$select'>>`
  width: 2.2rem;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, $select }) => ($select ? 'none' : theme.color.border)};

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    width: 2rem;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    width: 1.8rem;
  }
`;

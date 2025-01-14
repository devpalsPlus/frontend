import styled from 'styled-components';
import { SkillTagBoxProps } from './SkillTagBox';

export const Container = styled.div<Pick<SkillTagBoxProps, 'width'>>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  width: ${({ width }) => width};
  padding: 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.color.white};
`;

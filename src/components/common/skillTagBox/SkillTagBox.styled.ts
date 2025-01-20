import styled from 'styled-components';
import { SkillTagBoxProps } from './SkillTagBox';

export const Container = styled.div<Pick<SkillTagBoxProps, 'width'>>`
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.color.white};
  padding: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .skillTagWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .buttonWrapper {
    display: flex;
    justify-content: end;
    .resetButton {
      width: fit-content;
      gap: 0.5rem;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: 3rem;
      background-color: ${({ theme }) => theme.color.white};
      padding: 0.5rem;
      span {
        font-size: 1.2em;
      }
      svg {
        width: 1.2rem;
      }
    }
  }
`;

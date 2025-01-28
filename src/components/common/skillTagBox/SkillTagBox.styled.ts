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
`;

export const SkillTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.color.white};
  svg {
    width: 1.1rem;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 100ms ease-in;
  }
`;

export const ResetSpan = styled.span`
  font-size: 1rem;
`;

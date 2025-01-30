import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 1000;

  > * {
    width: 7.7rem;
    height: 2.6rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.5rem;
  }

  svg {
    width: 1rem;
  }
`;

export const SkillTagButtonWrapper = styled.div``;

export const SkillTagButton = styled.button`
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillTagBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 110%;
`;

export const BeginnerButtonWrapper = styled.div<{ $toggle: boolean | null }>`
  outline: 1px solid
    ${({ theme, $toggle }) => ($toggle ? theme.color.navy : 'initial')};
  border: 1px solid
    ${({ theme, $toggle }) => ($toggle ? theme.color.navy : 'initial')};
  transition: all 100ms ease-in-out;
`;

export const BeginnerButton = styled.button<{ $toggle: boolean | null }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  color: ${({ theme, $toggle }) => ($toggle ? theme.color.navy : 'initial')};
  font-weight: ${({ $toggle }) => ($toggle ? 'bold' : 'initial')};
`;

export const BeginnerImg = styled.img``;

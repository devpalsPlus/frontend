import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 85%;
`;

export const FilterWrapper = styled.div<{ $justifyContent: string }>`
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: ${({ $justifyContent }) => $justifyContent};
`;

export const WrapperTitle = styled.div<{ $selected: boolean }>`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scaleX(0.7) scaleY(0.6);
    width: 100%;
    height: 2.2em;
    background: rgba(33, 53, 85, 0.2);
    border-radius: 1.2em;
    z-index: 0;
    opacity: 0;
    filter: blur(10px);
    transition: opacity 0.3s, box-shadow 0.3s;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.2em;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.color.navy};
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    z-index: 1;
  }

  &:hover::before,
  ${({ $selected }) => $selected && css`&::before`} {
    opacity: 1;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  }
  &:hover::after,
  ${({ $selected }) => $selected && css`&::after`} {
    transform: scaleX(1.01);
    opacity: 1;
  }
`;

export const FilterTitle = styled.h1`
  font-size: 1.5em;
`;

export const WrapperButton = styled.div<{ $height: string }>`
  height: ${({ $height }) => $height};
  display: flex;
  justify-content: end;
  gap: 1rem;
  padding: 0.5rem;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

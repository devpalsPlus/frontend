import styled from 'styled-components';

export const Wrapper = styled.div<{ $select: boolean }>`
  border: 1px solid
    ${({ theme, $select }) => ($select ? theme.color.navy : theme.color.border)};
  background-color: ${({ theme, $select }) =>
    $select ? theme.color.navy : 'initial'};
  color: ${({ theme, $select }) => ($select ? theme.color.white : 'initial')};
  border-radius: 2rem;
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  transition: all 200ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 0.4rem;
    gap: 0.4rem;
    font-size: 0.9rem;
    &:hover {
      transform: none;
      transition: none;
    }
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0.2rem;
    gap: 0.2rem;
    font-size: 0.8rem;
  }
`;

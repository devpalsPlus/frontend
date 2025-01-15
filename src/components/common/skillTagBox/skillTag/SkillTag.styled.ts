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

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85%;
`;

export const FilterWrapper = styled.div<{ $justifyContent: string }>`
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: ${({ $justifyContent }) => $justifyContent};
`;

export const FilterTitle = styled.h1`
  font-size: 1.5em;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3e5879;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(65, 100, 146);
  }
`;

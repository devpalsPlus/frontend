import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: start;
`;

export const FilterTitle = styled.h1`
  font-size: 1.5em;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem 0 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2rem;
  /* margin: 1rem 0 3rem; */
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 1rem 2rem;
  }

  a {
    display: inline-block;
    width: 46%;
  }
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

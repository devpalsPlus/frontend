import styled from 'styled-components';

export const Container = styled.div`
  width: 30vw;
  padding: 0.6rem 0;
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 1.5rem;

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    width: 50vw;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0.4rem 0;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.2rem;

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 0 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const SearchButton = styled.button`
  svg {
    width: 1.6rem;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    svg {
      width: 1.2rem;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1``;

export const WrapperNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

export const WrapperSearchBar = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 0 1rem;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  font-size: 1rem;
`;

export const SearchButton = styled.button`
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MoveInquiredButton = styled.button`
  font-size: 1rem;
  width: 6rem;
  background: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  color: ${({ theme }) => theme.color.white};
  padding: 0.5em;
`;

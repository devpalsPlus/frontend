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

export const SearchBarForm = styled.form`
  display: flex;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 0 1rem;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const UturnButton = styled.button`
  &:hover {
    color: ${({ theme }) => theme.color.lightnavy};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SearchButton = styled.button`
  svg {
    width: 20px;
    height: 20px;
  }
`;

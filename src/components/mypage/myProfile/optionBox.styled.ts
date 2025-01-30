import styled from 'styled-components';

export const OptionLabel = styled.label<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  transition: border-color 0.3s;
  margin-bottom: 0;

  &:hover img {
    border-color: #3e5879;
  }

  &:hover span {
    color: #3e5879;
  }

  img {
    border: 1px solid #f0f0f0;
    border-radius: 50%;
    transition: border-color 0.3s;
    border-color: ${({ $isSelected }) => ($isSelected ? '#3e5879' : '#f0f0f0')};
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ $isSelected }) => ($isSelected ? '#3e5879' : '#a1a1a1')};
    transition: border-color 0.3s;

    @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 0.7rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

import styled from 'styled-components';

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const CreateButton = styled.button`
  width: 21rem;
  height: 15rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 0.75rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.grey};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 19rem;
    height: 14rem;
    font-size: ${({ theme }) => theme.heading.small.fontSize};
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

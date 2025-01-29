import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;

  img {
    width: 80px;
    height: 80px;

    @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
      width: 70px;
      height: 70px;
    }
  }

  .panel {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }

  .auth {
    ul {
      display: flex;
      flex-direction: column;
      width: 9rem;

      a,
      button {
        font-size: 0.9rem;
        font-weight: 600;
        width: 100%;
        line-height: 1;
        text-align: center;
        color: inherit;

        &:hover {
          color: ${({ theme }) => theme.color.white};
          background-color: ${({ theme }) => theme.color.navy};
        }
      }

      a {
        &:first-child {
          border-top-left-radius: ${({ theme }) => theme.borderRadius.primary};
          border-top-right-radius: ${({ theme }) => theme.borderRadius.primary};
        }
        &:last-child {
          border-bottom-left-radius: ${({ theme }) =>
            theme.borderRadius.primary};
          border-bottom-right-radius: ${({ theme }) =>
            theme.borderRadius.primary};
        }
      }

      li {
        width: 100%;
        padding: 1rem;
      }
    }
  }

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 10px 60px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      color: #a1a1a1;

      @media ${({ theme }) => theme.mediaQuery.tablet} {
        font-size: 0.7rem;
      }

      img {
        background-color: white;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
      }
    }
  }

  button {
    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 0.9rem;
    }
  }
`;

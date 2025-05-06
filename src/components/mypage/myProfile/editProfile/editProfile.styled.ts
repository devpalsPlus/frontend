import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  align-items: center;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
    }
  }

  button {
    margin-left: 1rem;
    padding: 0.65rem 1rem;
    min-width: 60px;
    font-size: 0.9rem;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
    }
  }
`;

export const InputTextNickname = styled.div`
  width: 20%;
  min-width: 125px;
`;

export const InputBeginner = styled.input`
  accent-color: ${({ theme }) => theme.color.navy};
`;

export const InputTextGithub = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100%;
  }
`;

export const InputTextCareer = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 85%;

  input {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span<{ message?: string }>`
  position: absolute;
  bottom: -1.8rem;
  left: 0.5rem;
  display: inline-block;
  color: #d43636;
  font-size: 0.8rem;
  height: 1.2rem;
`;

export const ErrorCareerMessage = styled.span<{ message?: string }>`
  display: inline-block;
  color: #d43636;
  font-size: 0.7rem;
`;

export const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
    }
  }
`;

export const EditList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  position: relative;

  background-color: ${({ theme }) => theme.color.white};
  padding: 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

export const CareerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.2fr;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: 20px;
  padding: 0.5rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 0.4rem;
  }
`;

export const CareerWrapper = styled.div`
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    flex: auto;
  }
`;

export const XMarkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #3e5879;
  svg {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const CareerAddButton = styled.button`
  background-color: #3e5879;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: -2rem;
  right: 0;
  svg {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Wrapper = styled.div`
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

import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 1rem 0 1rem 1.2rem;
`;

export const Box = styled.div`
  position: relative;
`;

export const Container = styled.div`
  background-color: rgb(246 246 246);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.5rem 3rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const BackgroundWrapper = styled.div`
  background-color: #fff;
  display: flex;
  padding: 0.5rem 1.3rem;
  border-radius: 15px;

  div {
    width: 100%;
    display: flex;
    gap: 13px;
    span {
      width: content;
      word-break: break-all;
      overflow-wrap: break-word;
    }

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
    }
  }

  li {
    span {
      font-size: 0.7rem;
    }
  }
`;

export const BackgroundBox = styled.div`
  background-color: #fff;
  display: flex;
  padding: 1rem 1.3rem;
  border-radius: 15px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 1.2rem;
    font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  button {
    position: absolute;
    top: 0.5rem;
    right: 1.2rem;
    background-color: #3e5879;
    padding: 0.5rem;
    border-radius: 50%;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      padding: 0.4rem;
    }

    svg {
      width: 1.3rem;
      height: 1.3rem;
      color: ${({ theme }) => theme.color.white};
    }
  }

  a {
    width: fit-content;
    display: inline-block;
    padding: 0.5rem 0.7rem;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    background-color: #3e5879;
    color: ${({ theme }) => theme.color.white};
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;

export const NicknameBackgroundBox = styled.div`
  background-color: #fff;
  display: flex;
  padding: 1rem 1.3rem;
  gap: 1rem;
  border-radius: 15px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 1.2rem;
    font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
  }
`;

export const NicknameSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.2rem;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
`;

export const Bio = styled.p`
  white-space: pre-line;
  word-break: break-word;
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

export const List = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      color: #a1a1a1;

      span {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
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

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #3e5879;
    svg {
      color: ${({ theme }) => theme.color.white};
    }
    width: 30px;
    height: 30px;
    border-radius: 50%;
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
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  background-color: rgba(237, 237, 237, 0.73);
  border-radius: 20px;
  padding: 0.5rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 0.4rem;
  }

  button {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 0;
    right: 0.5rem;
  }
`;

export const CareerWrapper = styled.div`
  flex: 1;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    flex: auto;
  }
`;

export const CareerAddButton = styled.button`
  /* display: flex; */
`;

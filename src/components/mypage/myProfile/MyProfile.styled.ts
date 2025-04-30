import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
`;

export const FilterWrapper = styled.div`
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: start;
`;

export const FilterTitle = styled.h1`
  font-size: 1.5em;
`;

export const TitleWrapper = styled.div``;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.large} 0 0 ${theme.borderRadius.large}`};
  padding: 2rem;

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
  width: 30px;
  height: 30px;
  border-radius: 50%;
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

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 60vh;
  overflow: auto;

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

export const LabelBox = styled.div`
  display: flex;
  overflow: visible;
  position: relative;
`;

export const ChartBox = styled.div`
  width: 250px;
  height: 250px;
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 15px;
`;

export const ExplainBox = styled.div`
  position: relative;
  margin-left: 12px;
`;

export const TooltipBox = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(20%) translateY(50px);

  width: 220px;
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  color: ${({ theme }) => theme.color.white};
  font-size: 0.65rem;
  padding: 0.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  visibility: hidden;
  z-index: 1000;

  ${ExplainBox}:hover & {
    visibility: visible;
  }
`;

export const Explain = styled.p`
  display: inline-block;
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.buttonScheme.primary.bg};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-size: 0.75rem;
  cursor: pointer;
  user-select: none;
`;

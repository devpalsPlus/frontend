import styled from 'styled-components';

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

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
      width: fit-content;
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

export const PositionWrapper = styled.div`
  flex-wrap: wrap;
`;

export const Bio = styled.p`
  white-space: pre-line;
  word-break: break-word;
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

export const LabelBox = styled.div`
  display: flex;
  overflow: visible;
  position: relative;
`;

export const ChartBox = styled.div`
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
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

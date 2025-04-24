import styled from 'styled-components';

export const Container = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

export const ImgWrapper = styled.span`
  width: 820px;
  margin-bottom: 1.5rem;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 668px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.heading.large.fontSize};
  color: ${({ theme }) => theme.color.navy};
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.heading.medium.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.color.navy};
`;

export const Bold = styled.span`
  font-weight: 700;
`;

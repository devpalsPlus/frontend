import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 10px 60px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 10px 16px;
  }
`;

export const Wrapper = styled.nav`
  display: flex;
`;

export const Alarm = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 70px;
    height: 70px;
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  justify-center: center;
  align-items: center;
  // item과 content의 차이가 뭘까?
`;

export const List = styled.ul`
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
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.primary};
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.primary};
    }
  }
`;

export const HeaderLink = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-right: 15px;
`;

export const Item = styled.li`
  width: 100%;
  padding: 1rem;
`;

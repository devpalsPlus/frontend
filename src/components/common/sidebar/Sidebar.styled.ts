import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f0f0f0;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: 22%;
  min-width: 130px;
  height: 80vh;
  margin-right: 1.25rem;
  padding-bottom: 1rem;
`;

export const AvartarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;

  span {
    display: inline-block;
    margin-top: 0.8rem;
    color: #575757;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const AvartarWrapper = styled.div`
  position: relative;
`;
export const MenuList = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
export const MenuItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  color: #6d6d6d;
  margin: 0.5rem 0;
  background-color: ${({ $isActive }) =>
    $isActive ? '#f9f9f9' : 'transparent'};

  @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.heading['semiSmall'].tabletFontSize};
  }

  &:hover {
    background-color: #f9f9f9;
  }

  svg {
    color: #6d6d6d;
    width: 30px;
    height: 30px;

    @media screen and ${({ theme }) => theme.mediaQuery.tablet} {
      width: 23px;
      height: 23px;
    }
  }
`;
export const IconWrapper = styled.div`
  margin-right: 0.625rem;
`;

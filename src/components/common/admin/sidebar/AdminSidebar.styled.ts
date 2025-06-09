import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1440px;
  height: 100vh;
  display: flex;
`;

export const ContainerArea = styled.section`
  flex: 1;
  width: 100%;
  padding: 2rem;
  margin-left: 15rem;
`;

export const SidebarContainer = styled.section`
  position: fixed;
  padding: 1rem;
  width: 15rem;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.color.grey};
`;

export const SidebarLogoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 1.5rem 1.5rem 0;
`;

export const SidebarLogoImg = styled.img`
  width: 5rem;
`;

export const LogoutButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3rem;
`;

export const LogoutImg = styled.img`
  width: 2rem;
  filter: invert(70%);
`;

export const LogoutSpan = styled.span`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-left: -7px;
`;

export const MovedListContainerAll = styled.nav`
  margin-top: 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const TitleWrapper = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2``;

export const AdminWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const AdminImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Admin = styled.span`
  font-size: 1.1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AdminAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AdminAuthButton = styled.button`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const AdminDropdownWrapper = styled.div`
  position: relative;
`;

export const AdminLinkWrapper = styled.nav`
  position: absolute;
  top: -1rem;
  left: -5.5rem;
  width: 5.5rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const AdminLink = styled(Link)`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.deepGrey};
  }
`;

export const NoticeContentDate = styled.span`
  font-size: 0.8rem;
`;

export const ViewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ViewIcon = styled.div`
  display: flex;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ViewCount = styled.span`
  font-size: 0.8rem;
`;

export const ContentWrapper = styled.div`
  min-height: 30vh;
  padding: 1.5rem 1rem 4rem 1rem;
`;

export const Content = styled.div`
  width: 100%;
  white-space: pre-wrap;
`;

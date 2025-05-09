import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 2rem 0;
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

export const NoticeContentDate = styled.span`
  font-size: 0.8rem;
`;

export const ViewWrapper = styled.div``;

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
  padding: 1.5rem 1rem;
`;

export const Content = styled.p``;

export const ContentBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${({ theme }) => theme.color.placeholder};
  position: relative;
  z-index: 1;
`;

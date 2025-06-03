import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const CardHeader = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  margin-left: 20px;
`;

export const ShowAllArea = styled(Link)`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ShowAllButton = styled.span`
  font-size: 13px;
  margin-right: 6px;
`;

export const ArrowRight = styled.img``;

export const Line = styled.hr``;

export const Wrapper = styled.div``;

export const MainContent = styled.div``;

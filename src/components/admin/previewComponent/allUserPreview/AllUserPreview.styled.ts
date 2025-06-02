import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const UserArea = styled.div`
  display: flex;
`;

export const ContentArea = styled(Link)`
  margin-left: 16px;
`;

export const NickName = styled.p`
  font-size: 14px;
`;

export const Email = styled.p`
  font-size: 9px;
  opacity: 0.5;
`;

export const MoveToUsersArea = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 9px;
`;

export const Arrow = styled.img`
  width: 11px;
  height: 11px;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const Inquiry = styled(Link)`
  margin-left: 16px;
`;

export const Category = styled.p`
  font-size: 9px;
  opacity: 50%;
`;

export const Title = styled.span`
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StateArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.p`
  font-size: 9px;
  opacity: 50%;
`;

export const Divider = styled.p`
  opacity: 20%;
  margin-left: 3px;
  margin-right: 3px;
`;

export const InquiryState = styled.p<{ $isCompleted: boolean }>`
  font-size: 9px;
  color: ${({ $isCompleted }) => ($isCompleted ? `#07DE00` : `#DE1A00`)};
`;

export const MoveToInquiryArea = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;

export const Text = styled.p``;

export const Arrow = styled.img``;

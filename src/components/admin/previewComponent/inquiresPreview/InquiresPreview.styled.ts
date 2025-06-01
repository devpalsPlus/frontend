import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const Inquiry = styled(Link)`
  margin-left: 16px;
`;

export const Category = styled.p`
  font-size: 10px;
  opacity: 50%;
`;

export const Title = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StateArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.p`
  font-size: 10px;
  opacity: 50%;
`;

export const Divider = styled.p`
  opacity: 20%;
  margin-left: 3px;
  margin-right: 3px;
`;

export const InquiryState = styled.p<{ $isCompleted: boolean }>`
  font-size: 10px;
  color: ${({ $isCompleted }) => ($isCompleted ? `#07DE00` : `#DE1A00`)};
`;

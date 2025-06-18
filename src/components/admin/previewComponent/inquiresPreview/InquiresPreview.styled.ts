import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SpinnerContainer } from '../allUserPreview/AllUserPreview.styled';

export const Container = styled.div`
  width: 100%;
`;

export const SpinnerWrapper = styled(SpinnerContainer)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Inquiry = styled(Link)`
  margin-left: 16px;
`;

export const Category = styled.p`
  font-size: 9px;
  opacity: 0.5;
`;

export const Title = styled.p`
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StateArea = styled.div`
  display: flex;
`;

export const InquiriesDate = styled.p`
  font-size: 9px;
  opacity: 0.5;
`;

export const Divider = styled.p`
  font-size: 9px;
  opacity: 0.2;
  margin-left: 3px;
  margin-right: 3px;
`;

export const InquiryState = styled.p<{ $isCompleted: boolean }>`
  font-size: 9px;
  color: ${({ theme, $isCompleted }) =>
    $isCompleted ? theme.color.green : theme.color.red};
`;

export const MoveToInquiryArea = styled(Link)`
  display: flex;
  font-size: 9px;
`;

export const Text = styled.p`
  font-size: 9px;
`;

export const Arrow = styled.img`
  width: 11px;
  height: 11px;
`;

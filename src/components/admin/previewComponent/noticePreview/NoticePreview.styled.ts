import styled from 'styled-components';
import { SpinnerContainer } from '../allUserPreview/AllUserPreview.styled';

export const Container = styled.div`
  width: 100%;
`;

export const SpinnerWrapper = styled(SpinnerContainer)``;

export const Wrapper = styled.div`
  display: flex;
`;

export const Dot = styled.img`
  margin-right: 7px;
`;

export const NoticeTitle = styled.p`
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

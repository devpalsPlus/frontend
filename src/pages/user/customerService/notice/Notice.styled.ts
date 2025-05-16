import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SpinnerWrapperStyled } from '../../../../components/user/mypage/Spinner.styled';

export const SpinnerWrapper = styled(SpinnerWrapperStyled)``;

export const Container = styled.section`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const NoticeDetailLink = styled(Link)``;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  height: 60vh;
`;

export const Container = styled.section`
  margin-top: 2rem;
  margin-bottom: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const NoticeDetailLink = styled(Link)``;

export const ContentBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${({ theme }) => theme.color.placeholder};
  position: relative;
  z-index: 1;
`;

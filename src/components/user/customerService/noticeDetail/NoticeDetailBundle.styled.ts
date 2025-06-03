import styled from 'styled-components';
import { SpinnerWrapperStyled } from '../../mypage/Spinner.styled';

export const SpinnerWrapper = styled(SpinnerWrapperStyled)``;

export const Container = styled.section<{ $width: string }>`
  width: ${({ $width }) => $width};
  margin: 0 auto;
  margin-bottom: 2rem;
`;

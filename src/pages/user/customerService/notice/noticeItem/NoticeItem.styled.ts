import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  display: flex;
  flex-direction: column;
`;

export const NoticeDetailLink = styled(Link)``;

import styled from 'styled-components';
import { EmptyLoadingPageProps } from './EmptyLoadingPage';

export const Container = styled.div<Pick<EmptyLoadingPageProps, 'height'>>`
  width: 100%;
  height: ${({ height }) => height};
`;

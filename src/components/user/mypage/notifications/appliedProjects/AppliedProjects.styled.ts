import styled from 'styled-components';
import { WrapperNoContent } from '../all/All.styled';

export const WrapperNoContentAppliedProjects = styled(WrapperNoContent)``;

export const container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

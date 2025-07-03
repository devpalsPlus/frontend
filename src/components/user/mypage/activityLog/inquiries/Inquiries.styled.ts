import styled from 'styled-components';
import { WrapperNoContent } from '../../notifications/all/All.styled';

export const container = styled.div`
  height: 100%;
  padding: 0 0.5rem 0 0.8rem;
`;

export const InquiriesContainer = styled.div`
  width: 100%;
`;

export const InquiriesTableHeadContainer = styled.div`
  width: 100%;
  position: sticky;
  padding-top: 1rem;
  top: 0;
  background: ${({ theme }) => theme.color.lightgrey};
`;

export const InquiriesTableHeadWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 8% 15% 65% 12%;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const InquiriesTableHeaderNo = styled.div`
  text-align: center;
`;

export const InquiriesTableHeaderCategory = styled.div`
  padding-left: 0.5rem;
`;

export const InquiriesTableHeaderTitle = styled.div`
  text-align: start;
  padding-left: 3rem;
`;

export const InquiriesTableHeaderState = styled.div`
  text-align: center;
`;

export const InquiriesWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WrapperNoContentAppliedProjects = styled(WrapperNoContent)``;

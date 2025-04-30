import styled from 'styled-components';

export const container = styled.div`
  height: 100%;
`;

export const InquiriesContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const InquiriesTableHeadWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 8% 18% 62% 12%;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WrapperNoContent = styled.div`
  height: 95%;
  display: flex;
  align-items: center;
`;

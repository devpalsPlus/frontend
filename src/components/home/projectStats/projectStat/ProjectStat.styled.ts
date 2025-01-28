import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
  padding-left: 1.25rem;
  align-items: center;
  gap: 1rem;
`;

export const Border = styled.div`
  width: 0.3rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.navy};
`;

export const StatWrapper = styled.div``;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const StatTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

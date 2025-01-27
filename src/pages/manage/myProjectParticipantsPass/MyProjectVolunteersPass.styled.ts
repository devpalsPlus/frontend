import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.deepGrey};
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 3.5rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin-right: 1rem;
`;

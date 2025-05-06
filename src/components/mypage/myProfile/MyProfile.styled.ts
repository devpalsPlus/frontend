import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: space-between;
`;

export const FilterTitle = styled.h1`
  font-size: 1.5em;
`;

export const EditLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e5879;
  padding: 0.5rem;
  border-radius: 50%;
  svg {
    stroke: white;
    width: 20px;
    height: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 85%;
`;

export const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large} 0 0
    ${({ theme }) => theme.borderRadius.large};
  padding: 2rem;
`;

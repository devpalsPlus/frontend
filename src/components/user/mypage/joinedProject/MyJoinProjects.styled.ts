import styled from 'styled-components';
import { WrapperNoContent } from '../notifications/all/All.styled';

export const Container = styled.section<{ $isNoContent: boolean }>`
  width: 100%;
  height: 85%;

  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterWrapper = styled.div`
  display: flex;
  padding: 1rem 1.2rem;
  justify-content: start;
`;

export const FilterTitle = styled.h1`
  font-size: 1.5em;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperNoContentMyJoinedProjects = styled(WrapperNoContent)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperProject = styled.div`
  background-color: ${({ theme }) => theme.color.lightgrey};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100%;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 1rem;
  }

  a {
    display: inline-block;
    width: 46%;
  }
`;

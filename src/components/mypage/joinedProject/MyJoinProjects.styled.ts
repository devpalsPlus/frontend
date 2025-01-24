import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem 0 5rem;
`;

export const TitleWrapper = styled.div`
  padding: 1rem 0 1rem 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: rgb(246 246 246);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2rem 3rem;
  margin: 1rem 0 3rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5%;

  a {
    display: inline-block;
    width: 46%;
    margin: 1rem 0;
  }
`;

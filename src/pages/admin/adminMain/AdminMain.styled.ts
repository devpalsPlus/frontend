import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(350px, auto);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GraphArea = styled.div``;

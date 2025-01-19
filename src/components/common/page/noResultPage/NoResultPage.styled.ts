import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  .noResultTitle {
    font-size: 1.5rem;
  }

  svg {
    width: 1.5rem;
  }
`;

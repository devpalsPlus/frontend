import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .defaultValue {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .select {
    z-index: 10;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 0.5rem;
    position: absolute;
    top: 2.8rem;
    cursor: pointer;
    overflow: hidden;

    .option {
      text-align: initial;
      padding: 0.5rem;

      &:hover {
        background-color: #213555;
        color: white;
      }
    }
  }

  svg {
    width: 1rem;
  }
`;

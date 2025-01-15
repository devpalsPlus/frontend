import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  .refWrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 1.5rem;

    .defaultValue {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      border-radius: 1.5rem;
    }

    .select {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: 0.5rem;
      position: absolute;
      top: 2.8rem;
      cursor: pointer;
      overflow: hidden;
      background-color: ${({ theme }) => theme.color.white};

      .option {
        text-align: initial;
        padding: 0.5rem;

        &:hover {
          background-color: ${({ theme }) => theme.color.navy};
          color: ${({ theme }) => theme.color.white};
        }
      }
    }
  }
`;

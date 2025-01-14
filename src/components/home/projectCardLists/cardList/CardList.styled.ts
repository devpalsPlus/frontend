import styled from 'styled-components';

export const Container = styled.div`
  width: 22.4rem;
  height: 22rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 2rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    height: 4rem;
    font-size: 1.2rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .position {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skillTag,
  .positionTags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .nickname {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .etc {
      display: flex;
      align-items: end;
      gap: 1rem;
      img {
        width: 2rem;
      }
      .view {
        display: flex;
        gap: 0.3rem;

        svg {
          width: 1.3rem;
        }
        span {
          width: 2.5rem;
          flex-direction: row;
        }
      }
    }
  }
`;

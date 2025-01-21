import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  width: 22.4rem;
  height: 22rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 2rem;
  padding: 1.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .deadLine {
    color: #3c3c3c;
    font-size: 0.9rem;
  }

  .title {
    height: 4rem;
    font-size: 1.25rem;
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

  .positionTitle {
    font-weight: 600;
    font-size: 0.9rem;
    color: #5f5f5f;
  }

  .skillTag,
  .positionTags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .positionTags {
    font-size: 0.8rem;
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

      span {
        font-size: 0.95rem;
        font-weight: 500;
        color: #646464;
      }
    }
    .etc {
      display: flex;
      align-items: end;
      gap: 0.5rem;
      img {
        width: 2rem;
      }
      .view {
        display: flex;
        gap: 0.3rem;

        svg {
          width: 1.3rem;
          color: #5f5f5f;
        }
        span {
          flex-direction: row;
          color: #5f5f5f;
        }
      }
    }
  }
`;

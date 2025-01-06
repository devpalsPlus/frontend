import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;

  img {
    width: 80px;
    height: 80px;
  }

  .auth {
    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
      width: 150px;
      li {
        a,
        button {
          font-size: 1rem;
          font-weight: 600;
          width: 100%;
          line-height: 1;
          background: none;
          border: 0;
        }
      }
    }
  }
`;

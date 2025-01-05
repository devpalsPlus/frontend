import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.width.desktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;

  img {
    width: 80px;
    height: 80px;
  }
`;

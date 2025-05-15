import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const WrapperNoContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CommentsWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CommentBorder = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${({ theme }) => theme.color.placeholder};
`;

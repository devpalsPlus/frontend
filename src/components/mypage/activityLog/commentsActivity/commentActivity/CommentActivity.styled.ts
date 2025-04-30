import styled from 'styled-components';

export const CommentWrapper = styled.div`
  cursor: pointer;
`;

export const CommentContent = styled.div``;

export const CommentDate = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const CommentProject = styled.div`
  font-size: 0.9rem;
`;

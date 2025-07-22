import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  margin-right: 8px;
`;

export const ReplyContainer = styled.div`
  cursor: pointer;
`;

export const ReplyContent = styled.p``;

export const CommentInput = styled.div`
  text-indent: 20px;
`;

export const ShowReply = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 85px;
  margin-bottom: 30px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

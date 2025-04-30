import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const CommentWrapper = styled.div`
  margin-top: 4px;
  flex: 1;
`;

export const NickName = styled.p`
  font-size: ${({ theme }) => theme.heading.xsSmall.fontSize};
  margin-left: 11px;
  margin-bottom: 3px;
`;

export const Comment = styled.span`
  display: inline-block;
  max-width: calc(100% - 12px);
  word-break: break-word;
  white-space: pre-wrap;
  margin-left: 12px;
`;

export const ReplyInputButton = styled.div`
  display: flex;
  margin-top: 11px;
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-left: 11px;
`;

export const ReplyContent = styled.p`
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const ReplyInput = styled.div`
  width: 100%;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
`;

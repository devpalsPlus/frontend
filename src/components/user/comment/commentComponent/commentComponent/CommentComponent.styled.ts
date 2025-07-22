import styled, { css } from 'styled-components';

export const Container = styled.div<{ $reply: boolean }>`
  flex: 1;

  ${({ $reply }) =>
    $reply &&
    css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
      padding-left: 85px;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const CommentWrapper = styled.div`
  flex: 1;
  margin-top: 4px;
`;

export const NickName = styled.p`
  font-size: ${({ theme }) => theme.heading.xsSmall.fontSize};
  margin-left: 11px;
  margin-bottom: 3px;
  opacity: 60%;
`;

export const Comment = styled.span`
  display: inline-block;
  font-weight: 500;
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
  display: flex;
  flex: 1;
  width: 94%;
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
`;

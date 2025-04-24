import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 110px;
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
`;

export const Comment = styled.span`
  margin-left: 11px;
`;

export const ReplyContainer = styled.div`
  margin-top: 11px;
  margin-left: 11px;
`;

export const ReplyButton = styled.div`
  display: flex;
  margin-top: 11px;
`;

export const Icon = styled.div`
  margin-left: 11px;
`;

export const ReplyContent = styled.p`
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const CommentInput = styled.div`
  text-indent: 20px;
`;

export const ReplyInput = styled.div`
  width: 100%;
  padding-left: 15px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  padding-left: 15px;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 10px;
`;

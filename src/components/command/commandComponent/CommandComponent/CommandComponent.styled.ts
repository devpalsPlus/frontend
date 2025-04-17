import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const CommandWrapper = styled.div`
  margin-top: 4px;
  flex: 1;
`;

export const NickName = styled.p`
  font-size: ${({ theme }) => theme.heading.xsSmall.fontSize};
  margin-left: 11px;
  margin-bottom: 3px;
`;

export const Command = styled.span`
  margin-left: 11px;
`;

export const ReplyInputButton = styled.div`
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

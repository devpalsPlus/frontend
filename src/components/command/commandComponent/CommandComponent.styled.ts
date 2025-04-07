import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const CommandWrapper = styled.div`
  margin-top: 4px;
`;

export const NickName = styled.p`
  font-size: ${({ theme }) => theme.heading.xsSmall.fontSize};
  margin-left: 11px;
  margin-bottom: 3px;
`;

export const Command = styled.span`
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

export const CommandInput = styled.div`
  text-indent: 20px;
`;

export const ReplyInput = styled.div`
  width: 100%;
  padding-left: 15px;
`;

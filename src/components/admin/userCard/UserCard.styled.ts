import styled from 'styled-components';
import { UserState } from '../../../models/auth';

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding: 10px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NickName = styled.p`
  margin-top: 5px;
`;

export const MainContentArea = styled.div`
  padding: 15px;
`;

export const TextLabel = styled.label`
  display: inline-block;
  font-size: 14px;
  opacity: 0.3;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const TextContent = styled.p<{
  $userState?: UserState;
}>`
  font-size: 13px;
  color: ${({ theme, $userState }) =>
    $userState === UserState.ONLINE
      ? theme.color.green
      : $userState === UserState.OFFLINE
      ? theme.color.blue
      : $userState === UserState.SUSPENDED
      ? theme.color.red
      : theme.color.primary};
  margin-left: 15px;
`;

export const SkillTagArea = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 15px;
`;

export const SkillTag = styled.img`
  width: 29px;
  height: 29px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 50%;
`;

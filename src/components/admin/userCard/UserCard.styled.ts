import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
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
  $userState?: '접속 중' | '오프라인' | '정지';
}>`
  font-size: 14px;
  color: ${({ $userState }) =>
    $userState === '접속 중'
      ? `#39E81E`
      : $userState === '오프라인'
      ? `#2560E8`
      : $userState === '정지'
      ? `#E8000C`
      : `#000000`};
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
  border: 1px solid #ccc;
  border-radius: 50%;
`;

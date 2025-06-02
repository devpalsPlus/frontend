import React from 'react';
import * as S from './UserCard.styled';
import Avatar from '../../common/avatar/Avatar';
import { AllUser } from '../../../models/auth';

interface UserCardProps {
  userData: AllUser;
}

const UserCard = ({ userData }: UserCardProps) => {
  return (
    <S.Container>
      <S.ProfileHeader>
        <Avatar image={userData.user.img} size='46px' />
        <S.NickName>{userData.user.nickname}</S.NickName>
      </S.ProfileHeader>
      <S.MainContentArea>
        <S.TextLabel>이메일</S.TextLabel>
        <S.TextContent>{userData.email}</S.TextContent>
        <S.TextLabel>회원 상태</S.TextLabel>
        <S.TextContent $userState={userData.userState}>
          {userData.userState}
        </S.TextContent>
        <S.TextLabel>경고 횟수</S.TextLabel>
        <S.TextContent>
          {userData.reportedCount === 0
            ? '없음'
            : `${userData.reportedCount}번`}
        </S.TextContent>
        <S.TextLabel>포지션</S.TextLabel>
        <S.TextContent>
          {userData.position.map((position) => position.name).join(', ')}
        </S.TextContent>
        <S.TextLabel>대표 스킬</S.TextLabel>
        <S.SkillTagArea>
          {userData.skill.map((skillTag) => (
            <S.SkillTag src={skillTag.img} />
          ))}
        </S.SkillTagArea>
        <S.TextLabel>계정 생성 날짜</S.TextLabel>
        <S.TextContent>{userData.createdAt}</S.TextContent>
      </S.MainContentArea>
    </S.Container>
  );
};

export default UserCard;

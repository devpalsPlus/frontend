import React from 'react';
import * as S from './UserCard.styled';
import Avatar from '../../common/avatar/Avatar';
import type { AllUser } from '../../../models/auth';
import { formatDate } from '../../../util/formatDate';

interface UserCardProps {
  userData: AllUser;
  onBan: (userId: number) => void;
}

const UserCard = ({ userData, onBan }: UserCardProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ProfileHeader>
          <Avatar image={userData.profileImg} size='46px' />
          <S.NickName>{userData.nickname}</S.NickName>
        </S.ProfileHeader>
        {/* {userData.userState !== '정지' &&  */}

        <S.BanArea
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onBan(userData.id);
          }}
        >
          <S.BanButton>퇴출</S.BanButton>
        </S.BanArea>
        {/* } */}
      </S.Wrapper>
      <S.MainContentArea>
        <S.TextLabel>이메일</S.TextLabel>
        <S.TextContent>{userData.email}</S.TextContent>
        <S.TextLabel>회원 상태</S.TextLabel>
        {/* <S.TextContent $userState={userData.userState}>
          {userData.userState}
        </S.TextContent> */}
        <S.TextLabel>경고 횟수</S.TextLabel>
        <S.TextContent>
          {userData.warning === 0 ? '없음' : `${userData.warning}번`}
        </S.TextContent>
        <S.TextLabel>포지션</S.TextLabel>
        <S.TextContent>
          {userData.position
            ? userData.position.map((position) => position.name).join(', ')
            : '선택된 포지션이 없습니다.'}
        </S.TextContent>
        <S.TextLabel>대표 스킬</S.TextLabel>
        {userData.skill ? (
          <S.SkillTagArea>
            {userData.skill.map((skillTag) => (
              <S.SkillTag key={skillTag.id} src={skillTag.img} />
            ))}
          </S.SkillTagArea>
        ) : (
          <S.TextContent>선택된 스킬이 없습니다.</S.TextContent>
        )}
        <S.TextLabel>계정 생성 날짜</S.TextLabel>
        <S.TextContent>{formatDate(userData.createdAt)}</S.TextContent>
      </S.MainContentArea>
    </S.Container>
  );
};

export default UserCard;

import * as S from './Profile.styled';
import BeginnerIcon from '../../../../../assets/beginner.svg';
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import { useEffect } from 'react';
import MyProfileWrapper from '../MyProfileWrapper';
import type { UserInfo } from '../../../../../models/userInfo';
import { PROFILE_DEFAULT_MESSAGE } from '../../../../../constants/user/myPageProfile';
import { ROUTES } from '../../../../../constants/user/routes';
import 'chart.js/auto';
import { chartOptions } from '../../../../../constants/evaluationChartData';

export default function Profile() {
  const {
    userInfoData,
    scrollRef,
  }: { userInfoData: UserInfo; scrollRef: React.RefObject<HTMLDivElement> } =
    useOutletContext();
  const location = useLocation();
  const myPage = location.pathname.includes('mypage') ? true : false;

  const chartData = {
    labels: ['책임감', '기획력', '협업능력', '성실도', '문제해결', '기술력'],
    datasets: [
      {
        label: '팀 점수',
        data: userInfoData.averageScores,
        backgroundColor: 'rgba(255, 108, 61, 0.2)',
      },
    ],
  };

  console.log(userInfoData.averageScores);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [scrollRef]);

  return (
    <S.ProfileSection>
      <MyProfileWrapper>
        <label>닉네임</label>
        <S.NicknameBackgroundBox>
          <S.NicknameSpan>{userInfoData.nickname}</S.NicknameSpan>
          {Boolean(userInfoData.beginner) && (
            <S.IconWrapper>
              <img src={BeginnerIcon} alt='beginner' width='20' height='20' />
            </S.IconWrapper>
          )}
        </S.NicknameBackgroundBox>
      </MyProfileWrapper>
      <MyProfileWrapper>
        <label>스킬셋</label>
        <S.BackgroundBox>
          <ul>
            {userInfoData.skills.length > 0 ? (
              userInfoData.skills.map((skill) => (
                <li key={skill.name}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    width='40'
                    height='40'
                  />
                  <span>{skill.name}</span>
                </li>
              ))
            ) : (
              <li>
                {myPage
                  ? PROFILE_DEFAULT_MESSAGE.mySkills
                  : PROFILE_DEFAULT_MESSAGE.skills}
              </li>
            )}
          </ul>
        </S.BackgroundBox>
      </MyProfileWrapper>
      <MyProfileWrapper>
        <label>포지션</label>
        <S.BackgroundWrapper>
          <S.PositionWrapper>
            {userInfoData.skills.length > 0 ? (
              userInfoData.positions
                .sort()
                .map((position) => (
                  <span key={position.name}>{position.name}</span>
                ))
            ) : (
              <span>
                {myPage
                  ? PROFILE_DEFAULT_MESSAGE.myPositions
                  : PROFILE_DEFAULT_MESSAGE.positions}
              </span>
            )}
          </S.PositionWrapper>
        </S.BackgroundWrapper>
      </MyProfileWrapper>
      <MyProfileWrapper>
        <label>깃허브</label>
        <S.BackgroundWrapper>
          <span>
            {userInfoData.github ||
              (myPage
                ? PROFILE_DEFAULT_MESSAGE.myGithub
                : PROFILE_DEFAULT_MESSAGE.github)}
          </span>
        </S.BackgroundWrapper>
      </MyProfileWrapper>
      <S.List>
        <label>경&nbsp;&nbsp;&nbsp;력</label>
        <S.BackgroundBox>
          <ul>
            {userInfoData.career?.length ? (
              userInfoData.career?.map((career) => (
                <li key={`-${career.name}`}>
                  <span>{career.name}</span> ({career.periodStart.slice(0, 10)}{' '}
                  ~ {career.periodEnd.slice(0, 10)}{' '}
                  <span> - {career.role}</span>)
                </li>
              ))
            ) : (
              <li>
                {myPage
                  ? PROFILE_DEFAULT_MESSAGE.myCareer
                  : PROFILE_DEFAULT_MESSAGE.career}
              </li>
            )}
          </ul>
        </S.BackgroundBox>
      </S.List>
      <S.List>
        <label>소&nbsp;&nbsp;&nbsp;개</label>
        <S.BackgroundBox>
          <S.Bio>
            {userInfoData.bio ||
              (myPage
                ? PROFILE_DEFAULT_MESSAGE.myBio
                : PROFILE_DEFAULT_MESSAGE.bio)}
          </S.Bio>
        </S.BackgroundBox>
      </S.List>

      <S.List>
        <S.LabelBox>
          <label>평가도</label>
          <S.ExplainBox>
            <S.Explain>평가도란?</S.Explain>
            <S.TooltipBox>
              평가도는 프로젝트 평가 단계에서 팀원들의 평가로 점수가 부여됩니다.
              <br />
              공고자가 회원을 평가하는 지표로 활용될 수 있습니다.
            </S.TooltipBox>
          </S.ExplainBox>
        </S.LabelBox>
        <S.BackgroundBox>
          <S.ChartBox>
            <Radar data={chartData} options={chartOptions} />
          </S.ChartBox>
        </S.BackgroundBox>
      </S.List>
      {myPage && <Link to={ROUTES.changePw}>비밀번호 재설정</Link>}
    </S.ProfileSection>
  );
}

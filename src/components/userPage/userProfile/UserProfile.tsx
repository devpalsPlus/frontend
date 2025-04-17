import Title from '../../common/title/Title';
import * as S from '../../mypage/myProfile/MyProfile.styled';
import BeginnerIcon from '../../../assets/beginner.svg';
import { useUserProfileInfo } from '../../../hooks/useUserInfo';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const { userData } = useUserProfileInfo(Number(userId));

  return (
    <>
      <S.TitleWrapper>
        <Title size='semiLarge'>유저 정보</Title>
      </S.TitleWrapper>
      <S.Container>
        <S.ProfileSection>
          <S.Wrapper>
            <label>닉네임</label>
            <S.BackgroundWrapper>
              <span>{userData?.nickname}</span>
              <S.IconWrapper>
                {userData?.userLevel === 'Beginner' ? (
                  <img
                    src={BeginnerIcon}
                    alt='beginner'
                    width='16'
                    height='16'
                  />
                ) : (
                  ''
                )}
              </S.IconWrapper>
            </S.BackgroundWrapper>
          </S.Wrapper>
          <S.Wrapper>
            <label>스킬셋</label>
            <S.BackgroundBox>
              <ul>
                {userData?.skills.map((skill) => (
                  <li key={skill.name}>
                    <img
                      src={skill.img}
                      alt={skill.name}
                      width='40'
                      height='40'
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </S.BackgroundBox>
          </S.Wrapper>
          <S.Wrapper>
            <label>포지션</label>
            <S.BackgroundWrapper>
              {userData?.positions.map((position) => (
                <span key={position.name}>{position.name}</span>
              ))}
            </S.BackgroundWrapper>
          </S.Wrapper>
          <S.Wrapper>
            <label>깃허브</label>
            <S.BackgroundWrapper>
              <span>{userData?.github}</span>
            </S.BackgroundWrapper>
          </S.Wrapper>
          <S.List>
            <label>경&nbsp;&nbsp;&nbsp;력</label>
            <S.BackgroundBox>
              <ul>
                {userData?.career?.map((career) => (
                  <li key={career.name}>
                    <span>{career.name}</span> (
                    {career.periodStart.slice(0, 10)} ~{' '}
                    {career.periodEnd.slice(0, 10)}{' '}
                    <span> - {career.role}</span>)
                  </li>
                ))}
              </ul>
            </S.BackgroundBox>
          </S.List>
          <S.List>
            <label>소&nbsp;&nbsp;&nbsp;개</label>
            <S.BackgroundBox>
              <S.Bio>{userData?.bio}</S.Bio>
            </S.BackgroundBox>
          </S.List>
        </S.ProfileSection>
      </S.Container>
    </>
  );
};

export default UserProfile;

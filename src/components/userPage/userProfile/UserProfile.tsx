import Title from '../../common/title/Title';
import * as S from '../../mypage/myProfile/myProfile.styled';
import BeginnerIcon from '../../../assets/beginner.svg';
import { useUserProfileInfo } from '../../../hooks/useUserInfo';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const { userData } = useUserProfileInfo(Number(userId));

  return (
    <S.Container>
      <Title size='semiLarge'>유저 정보</Title>
      <S.ProfileSection>
        <S.Wrapper>
          <label>닉네임</label>
          <span>{userData?.nickname}</span>
          <S.IconWrapper>
            {userData?.userLevel === 'Beginner' ? (
              <img src={BeginnerIcon} alt='beginner' width='16' height='16' />
            ) : (
              ''
            )}
          </S.IconWrapper>
        </S.Wrapper>
        <S.Wrapper>
          <label>스킬셋</label>
          <ul>
            {userData?.skills.map((skill) => (
              <li key={skill.skillName}>
                <img
                  src={skill.skillImg}
                  alt={skill.skillName}
                  width='40'
                  height='40'
                />
                <span>{skill.skillName}</span>
              </li>
            ))}
          </ul>
        </S.Wrapper>
        <S.Wrapper>
          <label>포지션</label>
          <span>{userData?.positionTag?.name}</span>
        </S.Wrapper>
        <S.Wrapper>
          <label>깃허브</label>
          <span>{userData?.github}</span>
        </S.Wrapper>
        <S.List>
          <label>경&nbsp;&nbsp;&nbsp;력</label>
          <ul>
            {userData?.career?.map((career) => (
              <li key={career.name}>
                <span>{career.name}</span> ({career.periodStart.slice(0, 10)} ~{' '}
                {career.periodEnd.slice(0, 10)} <span> - {career.role}</span>)
              </li>
            ))}
          </ul>
        </S.List>
        <S.List>
          <label>소&nbsp;&nbsp;&nbsp;개</label>
          <S.Bio>{userData?.bio}</S.Bio>
        </S.List>
      </S.ProfileSection>
    </S.Container>
  );
};

export default UserProfile;

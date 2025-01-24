import { Link, useParams } from 'react-router-dom';
import { useUserJoinedProjectList } from '../../../hooks/useUserInfo';
import * as S from '../../mypage/joinedProject/MyJoinProjects.styled';
import Title from '../../common/title/Title';
import Spinner from '../../mypage/Spinner';
import { ROUTES } from '../../../constants/routes';
import Project from '../../mypage/joinedProject/Project';
import NoContent from '../../common/noContent/NoContent';

const UserJoinProject = () => {
  const { userId } = useParams();
  const { userJoinedProjectListData, isLoading } = useUserJoinedProjectList(
    Number(userId)
  );

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  return (
    <S.Section>
      <S.Wrapper>
        <S.TitleWrapper>
          <Title size='semiLarge'>참여한 프로젝트 리스트</Title>
        </S.TitleWrapper>
        {userJoinedProjectListData?.acceptedProjects &&
        userJoinedProjectListData?.acceptedProjects?.length > 0 ? (
          <S.Container>
            {userJoinedProjectListData?.acceptedProjects?.map((project) => (
              <Link
                key={project.projectId}
                to={`${ROUTES.projectDetail}/${project.projectId}`}
              >
                <Project key={project.projectId} project={project} />
              </Link>
            ))}
          </S.Container>
        ) : (
          <S.NoWrapper>
            <NoContent type='projects' />
          </S.NoWrapper>
        )}
      </S.Wrapper>
      <S.Wrapper>
        <S.TitleWrapper>
          <Title size='semiLarge'>기획한 프로젝트 리스트</Title>
        </S.TitleWrapper>
        {userJoinedProjectListData?.ownProjects &&
        userJoinedProjectListData?.ownProjects?.length > 0 ? (
          <S.Container>
            {userJoinedProjectListData?.ownProjects?.map((project) => (
              <Link
                key={project.projectId}
                to={`${ROUTES.projectDetail}/${project.projectId}`}
              >
                <Project key={project.projectId} project={project} />
              </Link>
            ))}
          </S.Container>
        ) : (
          <S.NoWrapper>
            <NoContent type='projects' />
          </S.NoWrapper>
        )}
      </S.Wrapper>
    </S.Section>
  );
};

export default UserJoinProject;

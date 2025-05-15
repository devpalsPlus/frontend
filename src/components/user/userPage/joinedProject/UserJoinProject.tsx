import { Link, useParams } from 'react-router-dom';
import { useUserJoinedProjectList } from '../../../hooks/useUserInfo';
import * as S from '../../mypage/joinedProject/MyJoinProjects.styled';
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
    return <Spinner size='50px' color='#3e5879' />;
  }

  console.log('userJoinedProjectListData', userJoinedProjectListData);

  return (
    <S.Section>
      <S.Wrapper>
        <S.FilterWrapper>
          <S.FilterTitle>참여한 프로젝트 리스트</S.FilterTitle>
        </S.FilterWrapper>
        {userJoinedProjectListData?.acceptedProjects &&
        userJoinedProjectListData?.acceptedProjects?.length > 0 ? (
          <S.Container>
            {userJoinedProjectListData?.acceptedProjects?.map((project) => (
              <Link
                key={project.id}
                to={`${ROUTES.projectDetail}/${project.id}`}
              >
                <Project key={project.id} project={project} />
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
        <S.FilterWrapper>
          <S.FilterTitle>기획한 프로젝트 리스트</S.FilterTitle>
        </S.FilterWrapper>
        {userJoinedProjectListData?.ownProjects &&
        userJoinedProjectListData?.ownProjects?.length > 0 ? (
          <S.Container>
            {userJoinedProjectListData?.ownProjects?.map((project) => (
              <Link
                key={project.id}
                to={`${ROUTES.projectDetail}/${project.id}`}
              >
                <Project key={project.id} project={project} />
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

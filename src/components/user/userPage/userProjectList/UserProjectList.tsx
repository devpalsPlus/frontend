import { Link } from 'react-router-dom';
import * as S from '../../mypage/joinedProject/MyJoinProjects.styled';
import { ROUTES } from '../../../../constants/routes';
import NoContent from '../../../common/noContent/NoContent';
import ScrollWrapper from '../../mypage/ScrollWrapper';
import Spinner from '../../mypage/Spinner';
import Project from '../../mypage/joinedProject/Project';
import { useGetUserProjectList } from '../../../../hooks/user/useGetUserProjectList';
import useAuthStore from '../../../../store/authStore';

export default function UserProjects() {
  const isAdmin = useAuthStore().userData?.admin;
  const { userProjectData, isLoading, title } = useGetUserProjectList();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.FilterTitle>{title}</S.FilterTitle>
      </S.FilterWrapper>
      <ScrollWrapper>
        {userProjectData && userProjectData.length > 0 ? (
          <S.WrapperProject>
            {userProjectData?.map((project) => (
              <Link
                key={project.id}
                to={`${ROUTES.projectDetail}/${project.id}`}
                target={isAdmin ? '_blank' : undefined}
                rel={isAdmin ? 'noopener noreferrer' : undefined}
              >
                <Project project={project} />
              </Link>
            ))}
          </S.WrapperProject>
        ) : (
          <S.ContainerNoContentMyJoinedProjects>
            <S.WrapperNoContentMyJoinedProjects>
              <NoContent type='projects' />
            </S.WrapperNoContentMyJoinedProjects>
          </S.ContainerNoContentMyJoinedProjects>
        )}
      </ScrollWrapper>
    </S.Container>
  );
}

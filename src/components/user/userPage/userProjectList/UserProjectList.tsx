import { Link } from 'react-router-dom';
import * as S from '../../mypage/joinedProject/MyJoinProjects.styled';
import { ROUTES } from '../../../../constants/user/routes';
import NoContent from '../../../common/noContent/NoContent';
import ScrollWrapper from '../../mypage/ScrollWrapper';
import Spinner from '../../mypage/Spinner';
import Project from '../../mypage/joinedProject/Project';
import { useGetUserProjectList } from '../../../../hooks/user/useGetUserProjectList';

export default function UserProjects() {
  const { userProjectData, isLoading, title } = useGetUserProjectList();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.FilterTitle>{title}</S.FilterTitle>
      </S.FilterWrapper>
      {userProjectData && userProjectData.length > 0 ? (
        <ScrollWrapper>
          <S.WrapperProject>
            {userProjectData?.map((project) => (
              <Link
                key={project.id}
                to={`${ROUTES.projectDetail}/${project.id}`}
              >
                <Project project={project} />
              </Link>
            ))}
          </S.WrapperProject>
        </ScrollWrapper>
      ) : (
        <S.NoWrapper>
          <NoContent type='projects' />
        </S.NoWrapper>
      )}
    </S.Container>
  );
}

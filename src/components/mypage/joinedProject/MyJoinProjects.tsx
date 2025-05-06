import { Link } from 'react-router-dom';
import { useMyJoinedProjectList } from '../../../hooks/useMyInfo';
import * as S from './MyJoinProjects.styled';
import Project from './Project';
import { ROUTES } from '../../../constants/routes';
import NoContent from '../../common/noContent/NoContent';
import Spinner from '../Spinner';

const MyJoinProjects = () => {
  const { myJoinedProjectListData, isLoading } = useMyJoinedProjectList();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879' />;
  }
  if (!myJoinedProjectListData) return;

  return (
    <S.Container>
      <S.FilterWrapper>
        <S.FilterTitle>참여한 프로젝트 리스트</S.FilterTitle>
      </S.FilterWrapper>
      {myJoinedProjectListData && myJoinedProjectListData?.length > 0 ? (
        <S.ScrollWrapper>
          <S.WrapperProject>
            {myJoinedProjectListData?.map((project) => (
              <Link
                key={project.id}
                to={`${ROUTES.projectDetail}/${project.id}`}
              >
                <Project project={project} />
              </Link>
            ))}
          </S.WrapperProject>
        </S.ScrollWrapper>
      ) : (
        <S.NoWrapper>
          <NoContent type='projects' />
        </S.NoWrapper>
      )}
    </S.Container>
  );
};

export default MyJoinProjects;

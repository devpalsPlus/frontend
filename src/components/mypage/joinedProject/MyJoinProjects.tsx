import { Link } from 'react-router-dom';
import { useMyJoinedProjectList } from '../../../hooks/useMyInfo';
import Title from '../../common/title/Title';
import * as S from './MyJoinProjects.styled';
import Project from './Project';
import { ROUTES } from '../../../constants/routes';
import NoContent from '../../common/noContent/NoContent';
import Spinner from '../Spinner';

const MyJoinProjects = () => {
  const { myJoinedProjectListData, isLoading } = useMyJoinedProjectList();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  return (
    <>
      <S.TitleWrapper>
        <Title size='semiLarge'>참여한 프로젝트 리스트</Title>
      </S.TitleWrapper>
      {myJoinedProjectListData && myJoinedProjectListData?.length > 0 ? (
        <S.Container>
          {myJoinedProjectListData?.map((project) => (
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
    </>
  );
};

export default MyJoinProjects;

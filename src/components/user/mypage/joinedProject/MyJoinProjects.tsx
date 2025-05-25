import { Link } from 'react-router-dom';
import * as S from './MyJoinProjects.styled';
import Project from './Project';
import Spinner from '../Spinner';
import ScrollWrapper from '../ScrollWrapper';
import { useMyJoinedProjectList } from '../../../../hooks/user/useMyInfo';
import { ROUTES } from '../../../../constants/user/routes';
import NoContent from '../../../common/noContent/NoContent';

const MyJoinProjects = () => {
  const { myJoinedProjectListData, isLoading } = useMyJoinedProjectList();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <S.Container
        $isNoContent={myJoinedProjectListData?.length === 0 ? true : false}
      >
        <S.FilterWrapper>
          <S.FilterTitle>참여한 프로젝트 리스트</S.FilterTitle>
        </S.FilterWrapper>
        {myJoinedProjectListData && myJoinedProjectListData?.length > 0 ? (
          <ScrollWrapper>
            <S.WrapperProject>
              {myJoinedProjectListData?.map((project) => (
                <Link
                  key={project.id}
                  to={`${ROUTES.projectDetail}/${project.id}`}
                >
                  <Project
                    project={project}
                    canEvaluate={project.canEvaluate}
                  />
                </Link>
              ))}
            </S.WrapperProject>
          </ScrollWrapper>
        ) : (
          <S.WrapperNoContentMyJoinedProjects data-type='noContent'>
            <NoContent type='projects' />
          </S.WrapperNoContentMyJoinedProjects>
        )}
      </S.Container>
    </>
  );
};

export default MyJoinProjects;

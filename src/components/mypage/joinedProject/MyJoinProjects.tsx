import { Link } from 'react-router-dom';
import { useMyJoinedProjectList } from '../../../hooks/useMyInfo';
import Title from '../../common/title/Title';
import * as S from './MyJoinProjects.styled';
import Project from './Project';
import { ROUTES } from '../../../constants/routes';

const MyJoinProjects = () => {
  const { myJoinedProjectListData, isLoading } = useMyJoinedProjectList();
  console.log(myJoinedProjectListData);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (!myJoinedProjectListData) {
    return <div>프로젝트 정보를 불러 올 수 없습니다.</div>;
  }

  return (
    <>
      <S.TitleWrapper>
        <Title size='semiLarge'>참여한 프로젝트 리스트</Title>
      </S.TitleWrapper>
      <S.Container>
        {myJoinedProjectListData?.map((project) => (
          <Link
            className='projectBox'
            key={project.projectId}
            to={`${ROUTES.projectDetail}/${project.projectId}`}
          >
            <Project key={project.projectId} project={project} />
          </Link>
        ))}
      </S.Container>
    </>
  );
};

export default MyJoinProjects;

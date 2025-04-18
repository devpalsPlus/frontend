import { Link } from 'react-router-dom';
import { useMyAppliedStatusList } from '../../../hooks/useMyInfo';
import NoContent from '../../common/noContent/NoContent';
import Title from '../../common/title/Title';
import Spinner from '../Spinner';
import * as S from './MyApplyProject.styled';
import MyStatus from './MyStatus';
import { ROUTES } from '../../../constants/routes';

const MyApplyProject = () => {
  const { myAppliedStatusListData, isLoading } = useMyAppliedStatusList();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  return (
    <>
      <S.TitleWrapper>
        <Title size='semiLarge'>지원한 프로젝트 리스트</Title>
      </S.TitleWrapper>
      {myAppliedStatusListData && myAppliedStatusListData?.length > 0 ? (
        <S.Container>
          {myAppliedStatusListData?.map((data) => (
            <Link key={data.id} to={`${ROUTES.projectDetail}/${data.id}`}>
              <MyStatus list={data} />
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

export default MyApplyProject;

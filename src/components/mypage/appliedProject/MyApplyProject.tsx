import { useMyAppliedStatusList } from '../../../hooks/useMyInfo';
import Title from '../../common/title/Title';
import * as S from './MyApplyProject.styled';
import MyStatus from './MyStatus';

const MyApplyProject = () => {
  const { myAppliedStatusListData, isLoading } = useMyAppliedStatusList();

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (!myAppliedStatusListData) {
    return <div>지원한 리스트 정보가 없습니다.</div>;
  }

  return (
    <>
      <S.TitleWrapper>
        <Title size='semiLarge'>지원한 프로젝트 리스트</Title>
      </S.TitleWrapper>
      <S.Container>
        {myAppliedStatusListData?.map((status, index) => (
          <MyStatus
            key={`${status.projectTitle}-${status.status}-${index}`}
            status={status}
          />
        ))}
      </S.Container>
    </>
  );
};

export default MyApplyProject;

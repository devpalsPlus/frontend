import { Spinner } from '../../../../components/common/loadingSpinner/LoadingSpinner.styled';
import Title from '../../../../components/common/title/Title';
import CardList from '../../../../components/user/manageProjects/CardList';
import { useManagedProjects } from '../../../../hooks/user/useManagedProjects';
import * as S from './MyProjectList.styled';

const MyProjectList = () => {
  const { managedProjects, isLoading } = useManagedProjects();

  if (!isLoading) {
    return (
      <S.WrapperNoContentMyProjectList>
        <Spinner />
      </S.WrapperNoContentMyProjectList>
    );
  }

  return (
    <S.ManageProjectsContainer>
      <S.ManageProjectsWrapper>
        <S.TitleWrapper>
          <Title size='large'>모집 프로젝트 리스트</Title>
        </S.TitleWrapper>
        <CardList projects={managedProjects?.data ?? []} />
      </S.ManageProjectsWrapper>
    </S.ManageProjectsContainer>
  );
};

export default MyProjectList;

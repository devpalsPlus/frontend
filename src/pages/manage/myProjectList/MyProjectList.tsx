import * as S from './MyProjectList.styled';
import Title from '../../../components/common/title/Title';
import CardList from '../../../components/manageProjects/CardList';
import { useManagedProjects } from '../../../hooks/useManagedProjects';

const MyProjectList = () => {
  const { managedProjects } = useManagedProjects();

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

import * as S from './MyProjectVolunteersPass.styled';
import Sidebar from '../../../components/common/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { applicantsMenuItems } from '../../../constants/sidebarItems';
import InfoCard from '../../../components/common/infoCard/InfoCard';
import MainLogo from '../../../assets/mainlogo.svg';
import { usePassNonPassList } from '../../../hooks/usePassNonPassList';
import useGetProjectData from '../../../hooks/useJoinProject';
import ProjectHeader from '../../../components/manageProjects/ProjectHeader';
import PassNonPassList from '../../../components/manageProjects/passNonPassList/PassNonPassList';
import NoContent from '../../../components/common/noContent/NoContent';
const MyProjectVolunteersPass = () => {
  const { projectId } = useParams();
  const { data: projectData } = useGetProjectData(Number(projectId));
  const { passNonPassListData } = usePassNonPassList(Number(projectId));

  return (
    <S.Container>
      <Sidebar
        profileImage={MainLogo}
        menuItems={applicantsMenuItems(Number(projectId))}
      />
      <InfoCard>
        {projectData && <ProjectHeader projectData={projectData} />}
        {passNonPassListData?.accepted.length > 0 ||
        passNonPassListData?.rejected.length > 0 ? (
          <S.ResultContainer>
            <S.ListWrapper>
              <S.Title>합격자 리스트</S.Title>
              <PassNonPassList
                passNonPassListData={passNonPassListData?.accepted}
              />
            </S.ListWrapper>
            <S.ListWrapper>
              <S.Title>불 합격자 리스트</S.Title>
              <PassNonPassList
                passNonPassListData={passNonPassListData?.rejected}
              />
            </S.ListWrapper>
          </S.ResultContainer>
        ) : (
          <NoContent type='passNonPass' />
        )}
      </InfoCard>
    </S.Container>
  );
};

export default MyProjectVolunteersPass;

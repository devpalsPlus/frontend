import { useParams } from 'react-router-dom';

import * as S from './MyProjectVolunteer.styled';
import Sidebar from '../../../components/common/sidebar/Sidebar';
import InfoCard from '../../../components/common/infoCard/InfoCard';
import Title from '../../../components/common/title/Title';
import ApplicantList from '../../../components/manageProjects/applicantList/ApplicantList';
import ApplicantInfo from '../../../components/manageProjects/applicantInfo/ApplicantInfo';
import RecruitmentDate from '../../../components/manageProjects/RecruitmentDate';

import useGetProjectData from '../../../hooks/useJoinProject';
import { useApllicantList } from '../../../hooks/useApllicantList';

import { applicantsMenuItems } from '../../../constants/sidebarItems';
import { useAppllicantInfo } from '../../../hooks/useApplicantInfo';

const MyProjectVolunteer = () => {
  const { projectId } = useParams();
  const { applicantsData } = useApllicantList(Number(projectId));
  const { data: ProjectData } = useGetProjectData(Number(projectId));
  const sidebarMenuItem = applicantsMenuItems(Number(projectId));
  const { selectedApplicant, handleApplicantInfo } = useAppllicantInfo(
    Number(projectId)
  );

  return (
    <S.Container>
      <Sidebar menuItems={sidebarMenuItem} />
      <InfoCard>
        <div className='title-wrap'>
          {ProjectData && <Title size='semiLarge'>{ProjectData.title} </Title>}
        </div>
        {ProjectData && <RecruitmentDate ProjectData={ProjectData} />}

        <S.ContentWrapper>
          <S.ApplicantListWrapper>
            <S.Title>지원자 리스트</S.Title>
            {applicantsData && (
              <ApplicantList
                selectedApplicant={selectedApplicant?.userId}
                onClick={handleApplicantInfo}
                applicantsData={applicantsData}
              />
            )}
          </S.ApplicantListWrapper>

          <S.ApplicantInfoWrapper>
            <S.Title>지원자 정보</S.Title>
            {selectedApplicant && (
              <ApplicantInfo applicantInfo={selectedApplicant} />
            )}
          </S.ApplicantInfoWrapper>
        </S.ContentWrapper>
      </InfoCard>
    </S.Container>
  );
};

export default MyProjectVolunteer;

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
import PassNonPassButton from '../../../components/manageProjects/applicantList/PassNonPassButton';
import { usePassNonPass } from '../../../hooks/usePassNonPass';
import NoContent from '../../../components/noContent/NoContent';

const MyProjectVolunteer = () => {
  const { projectId } = useParams();
  const { data: ProjectData } = useGetProjectData(Number(projectId));
  const sidebarMenuItem = applicantsMenuItems(Number(projectId));
  const { applicantsData, isApplicantLoading } = useApllicantList(
    Number(projectId)
  );
  const { selectedApplicant, handleApplicantInfo } = useAppllicantInfo(
    Number(projectId)
  );
  const { handlePassNonPassStatus } = usePassNonPass(Number(projectId));

  return (
    <S.Container>
      <Sidebar menuItems={sidebarMenuItem} />
      <InfoCard>
        <div className='title-wrap'>
          {ProjectData && <Title size='semiLarge'>{ProjectData.title} </Title>}
        </div>
        {ProjectData && <RecruitmentDate ProjectData={ProjectData} />}

        {isApplicantLoading ||
        (applicantsData && applicantsData?.length > 0) ? (
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
            {selectedApplicant && (
              <S.ApplicantInfoWrapper>
                <S.TitleWithButtonWrapper>
                  <S.Title>지원자 정보</S.Title>

                  <S.ButtonWrapper>
                    <PassNonPassButton
                      isPass={true}
                      onClick={() =>
                        handlePassNonPassStatus(true, selectedApplicant.userId)
                      }
                    >
                      합격 리스트에 추가
                    </PassNonPassButton>
                    <PassNonPassButton
                      isPass={false}
                      onClick={() =>
                        handlePassNonPassStatus(false, selectedApplicant.userId)
                      }
                    >
                      불합격 리스트에 추가
                    </PassNonPassButton>
                  </S.ButtonWrapper>
                </S.TitleWithButtonWrapper>

                <ApplicantInfo applicantInfo={selectedApplicant} />
              </S.ApplicantInfoWrapper>
            )}
          </S.ContentWrapper>
        ) : (
          <NoContent type='applicants' />
        )}
      </InfoCard>
    </S.Container>
  );
};

export default MyProjectVolunteer;

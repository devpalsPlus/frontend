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
import { useApplicantInfo } from '../../../hooks/useApplicantInfo';
import PassNonPassButton from '../../../components/manageProjects/applicantList/PassNonPassButton';
import { usePassNonPass } from '../../../hooks/usePassNonPass';
import NoContent from '../../../components/common/noContent/NoContent';

import MainLogo from '../../../assets/mainlogo.svg';

const MyProjectVolunteer = () => {
  const { projectId } = useParams();
  const sidebarMenuItem = applicantsMenuItems(Number(projectId));

  const { data: projectData } = useGetProjectData(Number(projectId));
  const { handlePassNonPassStatus } = usePassNonPass(Number(projectId));
  const { applicantsData, isApplicantLoading } = useApllicantList(
    Number(projectId)
  );
  const { applicantInfo, selectedApplicant, handleSelectedApplicant } =
    useApplicantInfo(Number(projectId));

  return (
    <S.Container>
      <Sidebar profileImage={MainLogo} menuItems={sidebarMenuItem} />
      <InfoCard>
        <S.TitleWrapper>
          {projectData && <Title size='semiLarge'>{projectData.title} </Title>}
          {projectData?.isDone && (
            <S.RecruitmentEnd>공고 마감</S.RecruitmentEnd>
          )}
        </S.TitleWrapper>
        {projectData && <RecruitmentDate ProjectData={projectData} />}

        {isApplicantLoading ||
        (applicantsData && applicantsData?.length > 0) ? (
          <S.ContentWrapper>
            <S.ApplicantListWrapper>
              <S.Title>지원자 리스트</S.Title>
              {applicantsData && (
                <ApplicantList
                  selectedApplicant={selectedApplicant!}
                  onClick={handleSelectedApplicant}
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
                        handlePassNonPassStatus(true, selectedApplicant)
                      }
                      disabled={projectData?.isDone}
                    >
                      합격 리스트에 추가
                    </PassNonPassButton>
                    <PassNonPassButton
                      isPass={false}
                      onClick={() =>
                        handlePassNonPassStatus(false, selectedApplicant)
                      }
                      disabled={projectData?.isDone}
                    >
                      불합격 리스트에 추가
                    </PassNonPassButton>
                  </S.ButtonWrapper>
                </S.TitleWithButtonWrapper>

                {applicantInfo && (
                  <ApplicantInfo applicantInfo={applicantInfo} />
                )}
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

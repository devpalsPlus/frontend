import { useParams } from 'react-router-dom';
import * as S from './MyProjectVolunteer.styled';
import MainLogo from '../../../../assets/mainlogo.svg';
import { useMemo } from 'react';
import useGetProjectData from '../../../../hooks/user/useGetProjectData';
import { useModal } from '../../../../hooks/useModal';
import { usePassNonPassMutation } from '../../../../hooks/user/usePassNonPassMutation';
import { applicantsMenuItems } from '../../../../constants/sidebarItems';
import { useApllicantList } from '../../../../hooks/user/useApllicantList';
import { useApplicantInfo } from '../../../../hooks/user/useApplicantInfo';
import Sidebar from '../../../../components/common/sidebar/Sidebar';
import InfoCard from '../../../../components/common/infoCard/InfoCard';
import ProjectHeader from '../../../../components/user/manageProjects/ProjectHeader';
import ApplicantList from '../../../../components/user/manageProjects/applicantList/ApplicantList';
import PassNonPassButton from '../../../../components/user/manageProjects/applicantList/PassNonPassButton';
import ApplicantInfo from '../../../../components/user/manageProjects/applicantInfo/ApplicantInfo';
import NoContent from '../../../../components/common/noContent/NoContent';
import Modal from '../../../../components/common/modal/Modal';

const MyProjectVolunteer = () => {
  const { projectId } = useParams();
  const { data: projectData } = useGetProjectData(Number(projectId));
  const { isOpen, handleModalClose, handleModalOpen, message } = useModal();

  const { handlePassNonPassStatus } = usePassNonPassMutation(
    Number(projectId),
    handleModalOpen
  );

  const sidebarMenuItem = useMemo(
    () => applicantsMenuItems(Number(projectId), projectData?.isDone),
    [projectId, projectData]
  );

  const { applicantsData, isApplicantLoading } = useApllicantList(
    Number(projectId)
  );

  const { applicantInfo, selectedApplicant, handleSelectedApplicant } =
    useApplicantInfo(Number(projectId));

  return (
    <S.Container>
      <Sidebar profileImage={MainLogo} menuItems={sidebarMenuItem} />
      <InfoCard>
        {projectData && <ProjectHeader projectData={projectData} />}

        {isApplicantLoading ||
        (applicantsData && applicantsData.data?.length > 0) ? (
          <S.ContentWrapper>
            <S.ApplicantListWrapper>
              <S.Title>지원자 리스트</S.Title>
              {applicantsData && (
                <ApplicantList
                  selectedApplicant={selectedApplicant!}
                  onClick={handleSelectedApplicant}
                  applicantsData={applicantsData.data}
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
                        handlePassNonPassStatus({
                          status: 'ACCEPTED',
                          userId: selectedApplicant,
                        })
                      }
                      disabled={projectData?.isDone}
                    >
                      합격 리스트 추가
                    </PassNonPassButton>
                    <PassNonPassButton
                      isPass={false}
                      onClick={() =>
                        handlePassNonPassStatus({
                          status: 'REJECTED',
                          userId: selectedApplicant,
                        })
                      }
                      disabled={projectData?.isDone}
                    >
                      불합격 리스트 추가
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

      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default MyProjectVolunteer;

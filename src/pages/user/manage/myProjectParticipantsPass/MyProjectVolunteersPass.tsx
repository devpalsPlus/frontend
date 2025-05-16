import * as S from './MyProjectVolunteersPass.styled';
import { useParams } from 'react-router-dom';
import MainLogo from '../../../../assets/mainlogo.svg';
import { Suspense, useMemo } from 'react';
import useGetProjectData from '../../../../hooks/user/useGetProjectData';
import { usePassNonPassList } from '../../../../hooks/user/usePassNonPassList';
import { useModal } from '../../../../hooks/useModal';
import { useSendResultMutation } from '../../../../hooks/user/useSendResultMutation';
import { usePassNonPassMutation } from '../../../../hooks/user/usePassNonPassMutation';
import { applicantsMenuItems } from '../../../../constants/sidebarItems';
import Sidebar from '../../../../components/common/sidebar/Sidebar';
import LoadingSpinner from '../../../../components/common/loadingSpinner/LoadingSpinner';
import InfoCard from '../../../../components/common/infoCard/InfoCard';
import ProjectHeader from '../../../../components/user/manageProjects/ProjectHeader';
import SendResultButton from '../../../../components/user/manageProjects/passNonPassList/SendResultButton';
import PassNonPassList from '../../../../components/user/manageProjects/passNonPassList/PassNonPassList';
import NoContent from '../../../../components/common/noContent/NoContent';
import Modal from '../../../../components/common/modal/Modal';
const MyProjectVolunteersPass = () => {
  const { projectId } = useParams();
  const { data: projectData } = useGetProjectData(Number(projectId));
  const { passNonPassListData } = usePassNonPassList(Number(projectId));
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { handleSendResult } = useSendResultMutation(
    Number(projectId),
    handleModalOpen
  );
  const { handlePassNonPassStatus } = usePassNonPassMutation(
    Number(projectId),
    handleModalOpen
  );
  const sidebarMenuItem = useMemo(
    () => applicantsMenuItems(Number(projectId), projectData?.isDone),
    [projectId, projectData]
  );

  return (
    <S.Container>
      <Sidebar profileImage={MainLogo} menuItems={sidebarMenuItem} />
      <Suspense fallback={<LoadingSpinner />}>
        <InfoCard>
          {projectData && <ProjectHeader projectData={projectData} />}
          <SendResultButton
            onSubmit={handleSendResult}
            disabled={projectData?.isDone}
          />
          {passNonPassListData.data &&
          (passNonPassListData.data.accepted.length > 0 ||
            passNonPassListData.data.rejected.length > 0) ? (
            <S.ResultContainer>
              <S.ListWrapper>
                <S.Title>합격자 리스트</S.Title>
                {projectData && (
                  <PassNonPassList
                    handleStatus={handlePassNonPassStatus}
                    projectData={projectData}
                    passNonPassListData={passNonPassListData.data.accepted}
                  />
                )}
              </S.ListWrapper>
              <S.ListWrapper>
                <S.Title>불합격자 리스트</S.Title>
                {projectData && (
                  <PassNonPassList
                    handleStatus={handlePassNonPassStatus}
                    projectData={projectData!}
                    passNonPassListData={passNonPassListData.data.rejected}
                  />
                )}
              </S.ListWrapper>
            </S.ResultContainer>
          ) : (
            <NoContent type='passNonPass' />
          )}
        </InfoCard>
      </Suspense>

      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default MyProjectVolunteersPass;

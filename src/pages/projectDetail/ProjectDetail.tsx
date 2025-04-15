import { ScrollRestoration, useNavigate, useParams } from 'react-router-dom';
import ProjectInformation from '../../components/projectFormComponents/projectInformationText/ProjectInformation';
import useGetProjectData from '../../hooks/useGetProjectData';
import * as S from './ProjectDetail.styled';
import { formatDate } from '../../util/format';
import MarkdownEditorView from '../../components/projectFormComponents/editor/MarkdownEditorView';
import { EyeIcon } from '@heroicons/react/24/outline';
import useAuthStore from '../../store/authStore';
import { ROUTES } from '../../constants/routes';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import { MODAL_MESSAGE } from '../../constants/modalMessage';
import { useEffect } from 'react';
import CommandLayout from '../../components/command/CommandLayout';
import Avatar from '../../components/common/avatar/Avatar';
import Button from '../../components/common/Button/Button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const navigate = useNavigate();
  const { isOpen, message, handleModalClose, handleModalOpen } = useModal();
  const { data, isLoading, isFetching } = useGetProjectData(id);
  const { userData } = useAuthStore((state) => state);

  useEffect(() => {
    if (!data) {
      handleModalOpen(MODAL_MESSAGE.projectDetailFail);
    }
  }, [data, handleModalOpen]);

  if (isLoading) return <LoadingSpinner />;
  if (isFetching) return <LoadingSpinner />;

  if (!data) {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    );
  }

  const handleApplyClick = () => {
    navigate(`${ROUTES.apply}/${id}`);
  };

  const handleMovetoUserPage = () => {
    const userId = data.user.id;
    navigate(`/user/${userId}`);
  };

  return (
    <S.Container>
      <ScrollRestoration />
      <S.Header>
        <S.Title>{data.title}</S.Title>
        <S.ProfileContainer>
          <S.ProfileImageContainer onClick={handleMovetoUserPage}>
            <Avatar size='2.5rem' image={data.user.img} />
          </S.ProfileImageContainer>
          <S.UserInfo>
            <S.UserName onClick={handleMovetoUserPage}>
              {data.user.nickname}
            </S.UserName>
            <S.PostDate>{formatDate(data.recruitmentEndDate)}</S.PostDate>
            <S.ViewCount>
              <EyeIcon />
              {data.views}
            </S.ViewCount>
          </S.UserInfo>
        </S.ProfileContainer>
      </S.Header>

      <S.Content>
        <ProjectInformation data={data} />
        <br></br>
        <S.ProjectDescription>
          <MarkdownEditorView description={data.description} />
        </S.ProjectDescription>
      </S.Content>
      <S.ApplyButtonContainer>
        {userData?.id !== data.user.id ? (
          <Button
            size='primary'
            schema='primary'
            radius='primary'
            onClick={handleApplyClick}
          >
            프로젝트 함께하기
          </Button>
        ) : null}
      </S.ApplyButtonContainer>

      <hr></hr>

      <CommandLayout projectId={data.id} />
    </S.Container>
  );
};

export default ProjectDetail;

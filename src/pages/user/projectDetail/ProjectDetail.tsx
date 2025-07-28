import { ScrollRestoration, useNavigate, useParams } from 'react-router-dom';
import * as S from './ProjectDetail.styled';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/useModal';
import useGetProjectData from '../../../hooks/user/useGetProjectData';
import useAuthStore from '../../../store/authStore';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import LoadingSpinner from '../../../components/common/loadingSpinner/LoadingSpinner';
import Modal from '../../../components/common/modal/Modal';
import { ROUTES } from '../../../constants/routes';
import Avatar from '../../../components/common/avatar/Avatar';
import { formatDate } from '../../../util/formatDate';
import ProjectInformation from '../../../components/user/projectFormComponents/projectInformationText/ProjectInformation';
import MarkdownEditorView from '../../../components/user/projectFormComponents/editor/MarkdownEditorView';
import Button from '../../../components/common/Button/Button';
import CommentLayout from '../../../components/user/comment/CommentLayout';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const navigate = useNavigate();
  const { isOpen, message, handleModalClose, handleModalOpen, handleConfirm } =
    useModal();
  const { data, isLoading, isFetching } = useGetProjectData(id);
  const userData = useAuthStore((state) => state.userData);

  useEffect(() => {
    if (!isLoading && !isFetching && !data) {
      handleModalOpen(MODAL_MESSAGE.projectDetailFail);
    }
  }, [data, handleModalOpen, isLoading, isFetching]);

  // 간단한 메타 정보 설정
  useEffect(() => {
    if (data) {
      document.title = `${data.title} - 프로젝트 상세`;

      // 메타 설명 추가
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          `${data.title} 프로젝트에 대한 상세 정보입니다.`
        );
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = `${data.title} 프로젝트에 대한 상세 정보입니다.`;
        document.head.appendChild(newMetaDescription);
      }
    }
  }, [data]);

  if (isLoading || isFetching) return <LoadingSpinner />;

  if (!data) {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    );
  }

  const handleApplyClick = () => {
    if (userData?.hasRequiredTags) {
      navigate(`${ROUTES.apply}/${id}`);
    } else {
      handleModalOpen(MODAL_MESSAGE.noTagsData, () => navigate(ROUTES.mypage));
    }
  };

  const handleMovetoUserPage = () => {
    const userId = data.user.id;
    navigate(`/user/${userId}`);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <ScrollRestoration />
          <S.Header>
            <S.Title>{data.title}</S.Title>
            <S.ProfileContainer>
              <S.ProfileImageContainer onClick={handleMovetoUserPage}>
                <Avatar
                  size='2.5rem'
                  image={data.user.img}
                  alt={`${data.user.nickname}의 프로필 이미지`}
                />
              </S.ProfileImageContainer>
              <S.UserInfo>
                <S.UserName onClick={handleMovetoUserPage}>
                  {data.user.nickname}
                </S.UserName>
                <S.PostDate>{formatDate(data.recruitmentEndDate)}</S.PostDate>
                <S.ViewCount>
                  <EyeIcon aria-label='조회수' />
                  {data.views}
                </S.ViewCount>
              </S.UserInfo>
            </S.ProfileContainer>
          </S.Header>

          <S.Content>
            <ProjectInformation data={data} />
            <br />
            <S.ProjectDescription>
              <MarkdownEditorView description={data.description} />
            </S.ProjectDescription>
          </S.Content>

          <S.ApplyButtonContainer>
            {userData &&
            userData.id !== data.user.id &&
            !data.acceptedIds.includes(userData.id) &&
            !data.applicantIds.includes(userData.id) ? (
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

          <hr />

          <CommentLayout
            projectId={data.id}
            createrId={data.user.id}
            loginUserId={userData?.id}
          />
        </S.Wrapper>
      </S.Container>

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </>
  );
};

export default ProjectDetail;

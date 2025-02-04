import { useNavigate, useParams } from 'react-router-dom';
import ProjectInformation from '../../components/projectFormComponents/projectInformationText/ProjectInformation';
import useGetProjectData from '../../hooks/useJoinProject';
import * as S from './ProjectDetail.styled';
import { formatDate } from '../../util/format';
import Button from '../../components/common/Button/Button';
import MarkdownEditorView from '../../components/projectFormComponents/editor/MarkdownEditorView';
import Avatar from '../../components/common/avatar/Avatar';
import { EyeIcon } from '@heroicons/react/24/outline';
import useAuthStore from '../../store/authStore';
import { ROUTES } from '../../constants/routes';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetProjectData(id);
  const { userData } = useAuthStore((state) => state);

  if (isLoading) return <LoadingSpinner />;
  if (isFetching) return <LoadingSpinner />;
  if (!data) {
    return <LoadingSpinner />;
  }

  const handleApplyClick = () => {
    navigate(`${ROUTES.apply}/${id}`);
  };

  const handleMovetoUserPage = () => {
    const userId = data.User.id;
    navigate(`/user/${userId}`);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>{data.title}</S.Title>
        <S.ProfileContainer>
          <S.ProfileImageContainer onClick={handleMovetoUserPage}>
            <Avatar size='2.5rem' image={data.User.profileImg} />
          </S.ProfileImageContainer>
          <S.UserInfo>
            <S.UserName onClick={handleMovetoUserPage}>
              {data.User.nickname}
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
        {userData?.id !== data.User.id ? (
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
    </S.Container>
  );
};

export default ProjectDetail;

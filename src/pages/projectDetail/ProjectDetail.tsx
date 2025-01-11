import { useNavigate, useParams } from 'react-router-dom';
import ProjectInformation from '../../components/createProjectComponents/ProjectInformation';
import useGetProjectData from '../../hooks/useJoinProject';
import * as S from './ProjectDetail.styled';
import { formatDate } from '../../util/format';
import Button from '../../components/common/Button/Button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetProjectData(id);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isFetching) return <div>isFetching...</div>;

  const handleApplyClick = () => {
    navigate(`/main/apply/${id}`);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>{data.title}</S.Title>
        <S.ProfileContainer>
          <S.ProfileImage src={data.User.profileImg} alt='profile' />
          <S.UserInfo>
            <S.UserName>{data.User.nickname}</S.UserName>
            <S.PostDate>{formatDate(data.recruitmentEndDate)}</S.PostDate>
            <S.ViewCount>👁️{data.views}</S.ViewCount>
          </S.UserInfo>
        </S.ProfileContainer>
      </S.Header>

      <S.Content>
        <ProjectInformation data={data} />

        <S.ProjectDescription>
          <S.SectionTitle>프로젝트 소개</S.SectionTitle>
          <S.Description>{data.description}</S.Description>
        </S.ProjectDescription>
      </S.Content>

      <Button
        size='primary'
        schema='primary'
        radius='primary'
        onClick={handleApplyClick}
      >
        프로젝트 함께하기
      </Button>
    </S.Container>
  );
};

export default ProjectDetail;

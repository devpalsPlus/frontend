import ProjectInformation from '../../components/createProjectComponents/ProjectInformation';
import * as S from './ProjectDetail.styled';

const ProjectDetail = () => {
  return (
    <S.Container>
      <S.Header>
        <S.ProfileImage src='/path/to/profile-image.jpg' alt='profile' />
        <S.UserInfo>
          <S.UserName>Jenny</S.UserName>
          <S.PostDate>2024. 12. 29</S.PostDate>
          <S.ViewCount>👁️ 1</S.ViewCount>
        </S.UserInfo>
      </S.Header>

      <S.Content>
        <ProjectInformation />

        <S.ProjectDescription>
          <S.SectionTitle>프로젝트 소개</S.SectionTitle>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Interdum sit ac risus venenatis tellus dolor donec in. <br />
            <br />
            {`Et gravida eget platea quis non imperdiet convallis. Nunc scelerisque pharetra nisl.`}
            ...
          </S.Description>
        </S.ProjectDescription>
      </S.Content>

      <S.ActionButton>프로젝트 함께하기</S.ActionButton>
    </S.Container>
  );
};

export default ProjectDetail;

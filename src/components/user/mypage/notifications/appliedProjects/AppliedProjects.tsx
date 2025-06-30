import { Link, useParams } from 'react-router-dom';
import * as S from './AppliedProjects.styled';
import Spinner from '../../Spinner';
import AppliedProjectsStatus from './appliedProjectsStatus/AppliedProjectsStatus';
import NoContent from '../../../../common/noContent/NoContent';
import { ROUTES } from '../../../../../constants/routes';
import useGetUserProjectData from '../../../../../hooks/admin/useGetUserProjectData';

export default function AppliedProjects() {
  const { userId } = useParams();

  const { userData: userProjectData, isLoading } = useGetUserProjectData(
    Number(userId)
  );

  if (isLoading) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <Spinner />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  if (!userProjectData || userProjectData.length === 0) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <NoContent type='projects' />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  return (
    <S.container>
      <S.Wrapper>
        {userProjectData.map((data) => (
          <Link key={data.id} to={`${ROUTES.projectDetail}/${data.id}`}>
            <AppliedProjectsStatus list={data} />
          </Link>
        ))}
      </S.Wrapper>
    </S.container>
  );
}

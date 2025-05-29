import { Link } from 'react-router-dom';
import * as S from './AppliedProjects.styled';
import Spinner from '../../Spinner';
import AppliedProjectsStatus from './appliedProjectsStatus/AppliedProjectsStatus';
import NoContent from '../../../../common/noContent/NoContent';
import { useMyAppliedStatusList } from '../../../../../hooks/user/useMyInfo';
import { ROUTES } from '../../../../../constants/routes';

export default function AppliedProjects() {
  const { myAppliedStatusListData, isLoading } = useMyAppliedStatusList();

  if (isLoading) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <Spinner />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  if (!myAppliedStatusListData || myAppliedStatusListData.length === 0) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <NoContent type='projects' />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  return (
    <S.container>
      <S.Wrapper>
        {myAppliedStatusListData.map((data) => (
          <Link key={data.id} to={`${ROUTES.projectDetail}/${data.id}`}>
            <AppliedProjectsStatus list={data} />
          </Link>
        ))}
      </S.Wrapper>
    </S.container>
  );
}

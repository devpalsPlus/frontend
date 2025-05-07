import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { useMyAppliedStatusList } from '../../../../hooks/useMyInfo';
import NoContent from '../../../common/noContent/NoContent';
import * as S from './AppliedProjects.styled';
import Spinner from '../../Spinner';
import AppliedProjectsStatus from './appliedProjectsStatus/AppliedProjectsStatus';

export default function AppliedProjects() {
  const { myAppliedStatusListData, isLoading } = useMyAppliedStatusList();

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879' />;
  }

  if (!myAppliedStatusListData || myAppliedStatusListData.length === 0) {
    return <NoContent type='projects' />;
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

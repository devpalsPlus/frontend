import { useQuery } from '@tanstack/react-query';
import { managedProjectKey } from '../queries/user/keys';
import { ApiManagedProjects } from '../../models/manageMyProject';
import { getMyProjectLists } from '../../api/myProjectList.api';

export const useManagedProjects = () => {
  const { data, isLoading } = useQuery<ApiManagedProjects>({
    queryKey: managedProjectKey.managedProjectList,
    queryFn: () => getMyProjectLists(),
    staleTime: 1 * 60 * 1000,
  });

  return { managedProjects: data, isLoading };
};

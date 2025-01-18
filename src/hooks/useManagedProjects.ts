import { ManagedProject } from '../models/manageMyProject';
import { getMyProjectLists } from '../api/myProjectList.api';
import { useQuery } from '@tanstack/react-query';
import { managedProjectsKey } from './queries/keys';

export const useManagedProjects = () => {
  const { data, isLoading } = useQuery<ManagedProject[]>({
    queryKey: managedProjectsKey.mine,
    queryFn: () => getMyProjectLists(),
    staleTime: 1 * 60 * 1000,
  });

  return { managedProjects: data, isLoading };
};

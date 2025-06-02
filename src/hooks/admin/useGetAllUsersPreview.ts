import { useQuery } from '@tanstack/react-query';
import { UserData } from '../queries/user/keys';
import { getAllUsersPreview } from '../../api/auth.api';

export const useGetAllUsersPreview = () => {
  const {
    data: allUserData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [UserData.allUserPreview],
    queryFn: () => getAllUsersPreview(),
    select: (allUsers) => allUsers.slice(0, 5),
  });

  return { allUserData, isLoading, isFetching };
};

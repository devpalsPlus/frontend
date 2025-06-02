import { useQuery } from '@tanstack/react-query';
import { UserData } from '../queries/user/keys';
import { getAllUsers } from '../../api/auth.api';

export const useGetAllUsers = () => {
  const {
    data: allUserData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [UserData.allUser],
    queryFn: () => getAllUsers(),
  });

  return { allUserData, isLoading, isFetching };
};

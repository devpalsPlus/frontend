import { useQuery } from '@tanstack/react-query';
import { UserData } from '../queries/user/keys';
import { getAllUsers } from '../../api/auth.api';
import { SearchType } from '../../models/search';

export const useGetAllUsers = (searchUnit: SearchType) => {
  const {
    data: allUserData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [UserData.allUser, searchUnit.keyword, searchUnit.page],
    queryFn: () => getAllUsers(searchUnit),
  });

  return { allUserData, isLoading, isFetching };
};

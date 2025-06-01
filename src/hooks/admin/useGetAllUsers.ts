import { useQuery } from '@tanstack/react-query';
import { ReportData } from '../queries/user/keys';
import { getAllUsers } from '../../api/auth.api';

export const useGetAllUsers = () => {
  const { data: allUserData, isLoading } = useQuery({
    queryKey: [ReportData.allReports],
    queryFn: () => getAllUsers(),
  });

  return { allUserData, isLoading };
};

import { useQuery } from '@tanstack/react-query';
import { ReportData } from '../queries/user/keys';
import { getAllReports } from '../../api/report.api';

export const useGetAllReports = () => {
  const { data: allReportsData, isLoading } = useQuery({
    queryKey: [ReportData.allReports],
    queryFn: () => getAllReports(),
  });

  return { allReportsData, isLoading };
};

import { useQuery } from '@tanstack/react-query';
import { ReportData } from '../queries/keys';
import { getAllReports } from '../../api/report.api';

export const useGetAllReports = () => {
  const {
    data: allReportsData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [ReportData.allReports],
    queryFn: () => getAllReports(),
    select: (allReports) => allReports.slice(0, 5),
  });

  return { allReportsData, isLoading, isFetching };
};

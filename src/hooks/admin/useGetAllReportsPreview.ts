import { useQuery } from '@tanstack/react-query';
import { ReportData } from '../queries/keys';
import { getAllReportsPreview } from '../../api/admin/report.api';

export const useGetAllReportsPreview = () => {
  const {
    data: allReportsData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [ReportData.allReportsPreview],
    queryFn: () => getAllReportsPreview(),
    select: (allReports) => allReports.slice(0, 5),
  });

  return { allReportsData, isLoading, isFetching };
};

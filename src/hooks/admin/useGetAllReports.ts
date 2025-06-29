import { useQuery } from '@tanstack/react-query';
import { ReportData } from '../queries/keys';
import { getAllReports } from '../../api/admin/report.api';
import { SearchType } from '../../models/search';

export const useGetAllReports = (searchUnit: SearchType) => {
  const {
    data: allReportsData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [ReportData.allReports, searchUnit.keyword, searchUnit.page],
    queryFn: () => getAllReports(searchUnit),
  });

  return { allReportsData, isLoading, isFetching };
};

import { useQuery } from '@tanstack/react-query';
import { ReportData } from '../queries/keys';
import { getReportDetail } from '../../api/admin/report.api';

export const useGetReportDetail = (reportId: number) => {
  const {
    data: reportDetailData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [ReportData.reportDetail, reportId],
    queryFn: () => getReportDetail(reportId),
  });

  return { reportDetailData, isLoading, isFetching };
};

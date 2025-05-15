import { useQuery } from '@tanstack/react-query';
import { getChartData } from '../api/chart.api';
import { ChartDataList } from '../queries/user/keys';

const useChartData = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [ChartDataList.chartData],
    queryFn: () => getChartData(),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isFetching };
};

export default useChartData;

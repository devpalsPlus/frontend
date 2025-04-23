import { useQuery } from '@tanstack/react-query';
import { getChartData } from '../api/chart.api';

const useAlarmList = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [1, 1],
    queryFn: async () => await getChartData(),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isFetching };
};

export default useAlarmList;

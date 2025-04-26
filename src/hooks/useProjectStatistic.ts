import { useQuery } from '@tanstack/react-query';
import { getProjectStatistic } from '../api/projectLists.api';
import { useEffect, useState } from 'react';

interface ProjectStatDataReset {
  label: string;
  count: number;
}

export const useProjectStatistic = () => {
  const [projectStatData, setProjectStatData] = useState<
    ProjectStatDataReset[]
  >([]);

  const { data } = useQuery({
    queryKey: ['projectStat'],
    queryFn: () => getProjectStatistic(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    if (!data) return;
    setProjectStatData([
      { label: '모집 / 진행 중인 프로젝트', count: data?.ongoingProjectCount },
      { label: '모집 종료 된 프로젝트', count: data?.endProjectCount },
      { label: '전체 프로젝트', count: data?.totalProjectCount },
    ]);
  }, [data]);

  return { projectStatData };
};

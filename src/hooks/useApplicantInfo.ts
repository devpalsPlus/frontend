import { getApplicantInfo } from '../api/applicant.api';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/keys';
import { useLocation } from 'react-router-dom';
import { ApiApplicantInfo } from '../models/applicant';

export const useApplicantInfo = (projectId: number) => {
  const [selectedApplicant, setSelectedUser] = useState<number | null>(null);
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');

  const { data } = useQuery<ApiApplicantInfo>({
    queryKey: [applicantKey.info, projectId, selectedApplicant],
    queryFn: () => getApplicantInfo(projectId, selectedApplicant!),
    enabled: !!selectedApplicant,
    staleTime: 1 * 60 * 1000,
  });

  const handleSelectedApplicant = (userId: number) => {
    if (userId) setSelectedUser(userId);
  };

  useEffect(() => {
    handleSelectedApplicant(Number(userId));
  }, [location.search]);

  return {
    applicantInfo: data?.data,
    selectedApplicant,
    handleSelectedApplicant,
  };
};

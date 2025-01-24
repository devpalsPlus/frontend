import { getApplicantInfo } from '../api/applicant.api';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/keys';

export const useApplicantInfo = (projectId: number) => {
  const [selectedApplicant, setSelectedUser] = useState<number | null>(null);

  const { data } = useQuery({
    queryKey: [applicantKey.info, projectId, selectedApplicant],
    queryFn: () => getApplicantInfo(projectId, selectedApplicant!),
    enabled: !!selectedApplicant,
    staleTime: 1 * 60 * 1000,
  });

  const handleSelectedApplicant = (userId: number) => {
    setSelectedUser(userId);
  };

  return { applicantInfo: data, selectedApplicant, handleSelectedApplicant };
};

import { getApplicantInfo } from '../api/applicant.api';
import { useState } from 'react';
import { ApplicantInfo } from '../models/applicant';

export const useAppllicantInfo = (projectId: number) => {
  const [selectedApplicant, setSelectedApplicant] =
    useState<ApplicantInfo | null>(null);

  const handleApplicantInfo = (userId: number) => {
    getApplicantInfo(projectId, userId).then((data) => {
      setSelectedApplicant(data);
    });
  };

  return { handleApplicantInfo, selectedApplicant };
};

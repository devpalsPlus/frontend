import { patchPassNonPassStatus } from '../api/applicant.api';
import { useApllicantList } from './useApllicantList';

export const usePassNonPass = (projectId: number) => {
  const { refetch } = useApllicantList(projectId);
  const handlePassNonPassStatus = (isPass: boolean, userId: number) => {
    const data = { status: isPass ? 'ACCEPTED' : 'REJECTED' };

    patchPassNonPassStatus(data, projectId, userId).then(() => refetch());
  };

  return { handlePassNonPassStatus };
};

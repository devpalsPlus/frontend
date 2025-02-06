import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MODAL_MESSAGE } from '../constants/modalMessage';
import { postApplicantProject } from '../api/joinProject.api';
import { ROUTES } from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { joinProject } from '../models/joinProject';
import { ProjectListKey, userInfoKey } from './queries/keys';

interface UseApplyProjectProps {
  id: number;
  handleModalOpen: (newMessage: string) => void;
}

const useApplyProject = ({ id, handleModalOpen }: UseApplyProjectProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData(userInfoKey.userProfile) as
    | { id: number }
    | undefined;
  const userId = userInfo?.id;

  const mutation = useMutation({
    mutationFn: (formData: joinProject) => postApplicantProject(formData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ProjectListKey.myAppliedStatusList,
      });
      queryClient.invalidateQueries({
        queryKey: [userInfoKey.userJoinedList, userId],
      });
      handleModalOpen(MODAL_MESSAGE.applyProjectSuccess);

      setTimeout(() => {
        navigate(ROUTES.main);
      }, 3000);
    },
    onError: (error) => {
      console.log(error);
      handleModalOpen(MODAL_MESSAGE.applyProjectFail);
    },
  });

  const applyProject = async (formData: joinProject) => {
    mutation.mutate(formData);
  };

  return {
    applyProject,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useApplyProject;

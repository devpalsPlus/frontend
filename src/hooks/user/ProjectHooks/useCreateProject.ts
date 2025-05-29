import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postProject } from '../../../api/joinProject.api';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { managedProjectKey } from '../../queries/user/keys';
import { ROUTES } from '../../../constants/routes';
import type { FormData } from '../../../models/createProject';

interface UseCreateProjectProps {
  handleModalOpen: (newMessage: string) => void;
}

const useCreateProject = ({ handleModalOpen }: UseCreateProjectProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postProject(formData),
    onSuccess: () => {
      handleModalOpen(MODAL_MESSAGE.createProjectSuccess);

      queryClient.invalidateQueries({
        queryKey: [managedProjectKey.managedProjectList],
      });

      setTimeout(() => {
        navigate(ROUTES.main);
      }, 3000);
    },
    onError: (error) => {
      console.error(error);
      handleModalOpen(MODAL_MESSAGE.createProjectFail);
    },
  });

  const createProject = async (formData: FormData) => {
    mutation.mutate(formData);
  };

  return {
    createProject,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useCreateProject;

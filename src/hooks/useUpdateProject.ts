import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putProject } from '../api/joinProject.api';
import { FormData } from '../models/createProject';
import { MODAL_MESSAGE } from '../constants/modalMessage';
import { ROUTES } from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { managedProjectKey } from './queries/keys';

interface UseUpdateProjectProps {
  id: number;
  handleModalOpen: (newMessage: string) => void;
}

const useUpdateProject = ({ id, handleModalOpen }: UseUpdateProjectProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData: FormData) => putProject(formData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [managedProjectKey.detail, id],
        exact: true,
      });
      handleModalOpen(MODAL_MESSAGE.ModifyProjectSuccess);

      setTimeout(() => {
        navigate(`${ROUTES.projectDetail}/${id}`);
      }, 3000);
    },
    onError: (error) => {
      handleModalOpen(MODAL_MESSAGE.ModifyProjectFail);
      console.log(error);
    },
  });

  const updateProject = async (formData: FormData) => {
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    updateProject,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useUpdateProject;

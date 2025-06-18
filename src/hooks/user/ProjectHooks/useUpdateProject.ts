import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { putProject } from '../../../api/joinProject.api';
import { managedProjectKey } from '../../queries/keys';
import type { FormData } from '../../../models/createProject';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { ROUTES } from '../../../constants/routes';

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
      }, 2000);
    },
    onError: (error) => {
      handleModalOpen(MODAL_MESSAGE.ModifyProjectFail);
      console.error(error);
    },
  });

  const updateProject = async (formData: FormData) => {
    try {
      mutation.mutateAsync(formData);
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

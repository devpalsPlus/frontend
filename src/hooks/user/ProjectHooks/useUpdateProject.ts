import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { managedProjectKey } from '../../queries/user/keys';
import { putProject } from '../../../api/joinProject.api';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { FormData } from '../../../models/createProject';
import { ROUTES } from '../../../constants/user/routes';
=======
import { putProject } from '../../../api/joinProject.api';
import { managedProjectKey } from '../../queries/user/keys';
import { FormData } from '../../../models/createProject';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';
import { ROUTES } from '../../../constants/user/routes';

>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)
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
      console.log(error);
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

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaveSearchFiltering } from '../useSaveSearchFiltering';
import { postProject } from '../../api/joinProject.api';
import { MODAL_MESSAGE } from '../../constants/modalMessage';
import { managedProjectKey } from '../queries/keys';
import { ROUTES } from '../../constants/routes';
import { FormData } from '../../models/createProject';

interface UseCreateProjectProps {
  handleModalOpen: (newMessage: string) => void;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
}

const useCreateProject = ({
  handleModalOpen,
  setIsSubmit,
}: UseCreateProjectProps) => {
  const navigate = useNavigate();
  const { handleUpdateFilters } = useSaveSearchFiltering();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postProject(formData),
    onSuccess: () => {
      handleModalOpen(MODAL_MESSAGE.createProjectSuccess);
      setIsSubmit(true);
      handleUpdateFilters('skillTag', []);

      queryClient.invalidateQueries({
        queryKey: [managedProjectKey.managedProjectList],
      });

      setTimeout(() => {
        navigate(ROUTES.main);
      }, 3000);
    },
    onError: (error) => {
      console.log(error);
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

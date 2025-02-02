import { useMutation } from '@tanstack/react-query';
import { FormData } from '../models/createProject';
import { MODAL_MESSAGE } from '../constants/modalMessage';
import { postProject } from '../api/joinProject.api';
import { Dispatch, SetStateAction } from 'react';
import { useSaveSearchFiltering } from './useSaveSearchFiltering';
import { ROUTES } from '../constants/routes';
import { useNavigate } from 'react-router-dom';

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

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postProject(formData),
    onSuccess: () => {
      handleModalOpen(MODAL_MESSAGE.createProjectSuccess);
      setIsSubmit(true);
      handleUpdateFilters('skillTag', []);

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

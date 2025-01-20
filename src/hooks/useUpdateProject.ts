import { useMutation } from '@tanstack/react-query';
import { putProject } from '../api/joinProject.api';
import { FormData } from '../models/createProject';

interface UseUpdateProjectProps {
  id: number;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

const useUpdateProject = ({
  id,
  onSuccess,
  onError,
}: UseUpdateProjectProps) => {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => putProject(formData, id),
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      console.error('Project update failed:', error);
      onError?.(error);
    },
  });

  const updateProject = async (formData: FormData) => {
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error('Error updating project:', error);
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

import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deletePositionTag,
  deleteSkillTag,
  postPositionTag,
  postSkillTag,
} from '../../api/admin/tag.api';
import { AxiosError } from 'axios';
import type { TagFormType } from '../../models/tags';
import { Tag } from '../queries/keys';

export const useAdminSkillTag = () => {
  const queryClient = useQueryClient();

  const postSkillTagMutate = useMutation<void, AxiosError, FormData>({
    mutationFn: (formData) => postSkillTag(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: Tag.skillTag,
      });
    },
  });

  const deleteSkillTagMutate = useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => deleteSkillTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: Tag.skillTag,
      });
    },
  });

  const postPositionTagMutate = useMutation<
    void,
    AxiosError,
    Pick<TagFormType, 'name'>
  >({
    mutationFn: ({ name }) => postPositionTag({ name }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: Tag.positionTag,
      });
    },
  });

  const deletePositionTagMutate = useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => deletePositionTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: Tag.positionTag,
      });
    },
  });

  return {
    postSkillTagMutate,
    deleteSkillTagMutate,
    postPositionTagMutate,
    deletePositionTagMutate,
  };
};

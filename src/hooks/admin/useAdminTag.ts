import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deletePositionTag,
  deleteSkillTag,
  postPositionTag,
  postSkillTag,
  putPositionTag,
  putSkillTag,
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

  const putSkillTagMutate = useMutation<
    void,
    AxiosError,
    {
      formData: FormData;
      id: number;
    }
  >({
    mutationFn: ({ formData, id }) => putSkillTag({ formData, id }),
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
    mutationFn: ({ name }) => postPositionTag(name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: Tag.positionTag,
      });
    },
  });

  const putPositionTagMutate = useMutation<
    void,
    AxiosError,
    {
      name: string;
      id: number;
    }
  >({
    mutationFn: ({ name, id }) => putPositionTag({ name, id }),
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
    putSkillTagMutate,
    deleteSkillTagMutate,
    postPositionTagMutate,
    putPositionTagMutate,
    deletePositionTagMutate,
  };
};

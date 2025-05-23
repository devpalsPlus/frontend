import type { CommentType } from '../models/comment';
import { httpClient } from './http.api';

export const postComment = async (id: number, content: string) => {
  try {
    const response = await httpClient.post(`/project/${id}/comment`, {
      content: content,
    });
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getComment = async (id: number): Promise<CommentType[]> => {
  try {
    const response = await httpClient.get(`/project/${id}/comment`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw ErrorEvent;
  }
};

export const deleteComment = async (id: number, commentId: number) => {
  try {
    const response = await httpClient.delete(
      `/project/${id}/comment/${commentId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw ErrorEvent;
  }
};

export const patchComment = async (
  id: number,
  commentId: number,
  content: string
) => {
  try {
    const response = await httpClient.patch(
      `/project/${id}/comment/${commentId}?content=${content}`
    );
    return response.status;
  } catch (error) {
    console.error(error);
    throw ErrorEvent;
  }
};

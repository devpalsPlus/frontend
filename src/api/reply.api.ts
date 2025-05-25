import type { ReplyType } from '../models/comment';
import { httpClient } from './http.api';

export const getReply = async (
  projectId: number,
  commentId: number
): Promise<ReplyType[]> => {
  try {
    const response = await httpClient.get(
      `/project/${projectId}/comment/${commentId}/recomment`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postReply = async (
  projectId: number,
  commentId: number,
  content: string
) => {
  try {
    const response = await httpClient.post(
      `/project/${projectId}/comment/${commentId}/recomment`,
      {
        content: content,
      }
    );
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putReply = async (
  recommentId: number | undefined,
  content: string
) => {
  if (recommentId === undefined) {
    throw new Error('recommentId가 필요합니다.');
  }
  try {
    const response = await httpClient.patch(
      `/project/recomment/${recommentId}`,
      {
        content: content,
      }
    );
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteReply = async (recommentId: number) => {
  try {
    const response = await httpClient.delete(
      `/project/recomment/${recommentId}`
    );
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

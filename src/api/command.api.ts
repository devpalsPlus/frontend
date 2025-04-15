import { CommandType } from '../models/command';
import { httpClient } from './http.api';

export const postCommand = async (id: number, content: string) => {
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

export const getCommand = async (id: number): Promise<CommandType[]> => {
  try {
    const response = await httpClient.get(`/project/${id}/comment`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw ErrorEvent;
  }
};

export const deleteCommand = async (id: number, commandId: number) => {
  try {
    const response = await httpClient.delete(
      `/project/${id}/comment/${commandId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw ErrorEvent;
  }
};

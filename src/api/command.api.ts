import { httpClient } from './http.api';

export const postCommand = async (id: number, content: string) => {
  try {
    const response = await httpClient.post(`/project/${id}/command`, content);
    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

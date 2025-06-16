import type { ApiCommonBasicType } from '../../models/apiCommon';
import type { TagFormType } from '../../models/tags';
import { httpClient } from '../http.api';

export const postSkillTag = async (formData: FormData) => {
  try {
    await httpClient.post<ApiCommonBasicType>(`/skill-tag`, formData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteSkillTag = async (id: number) => {
  try {
    await httpClient.delete<ApiCommonBasicType>(`/skill-tag/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postPositionTag = async ({ name }: Pick<TagFormType, 'name'>) => {
  try {
    await httpClient.post<ApiCommonBasicType>(`/position-tag`, { name });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deletePositionTag = async (id: number) => {
  try {
    await httpClient.delete<ApiCommonBasicType>(`/position-tag/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

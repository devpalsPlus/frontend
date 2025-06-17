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

export const putSkillTag = async ({
  formData,
  id,
}: {
  formData: FormData;
  id: number;
}) => {
  try {
    await httpClient.put<ApiCommonBasicType>(`/skill-tag/${id}`, formData);
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
  console.log(name);

  try {
    await httpClient.post<ApiCommonBasicType>(`/position-tag`, { name });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const putPositionTag = async ({
  name,
  id,
}: {
  name: Pick<TagFormType, 'name'>;
  id: number;
}) => {
  try {
    await httpClient.put<ApiCommonBasicType>(`/position-tag/${id}`, { name });
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

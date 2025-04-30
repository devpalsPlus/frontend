import type { ApiMethodTag, ApiPositionTag, ApiSkillTag } from '../models/tags';
import { httpClient } from './http.api';

export const getSkillTag = async () => {
  try {
    const response = await httpClient.get<ApiSkillTag>('/skill-tag');

    return response.data.data;
  } catch (e) {
    console.error('getSkillTag', e);
  }
};

export const getPositionTag = async () => {
  try {
    const response = await httpClient.get<ApiPositionTag>('/position-tag');
    return response.data.data;
  } catch (e) {
    console.error('getPositionTag', e);
  }
};

export const getMethodTag = async () => {
  try {
    const response = await httpClient.get<ApiMethodTag>('/method-type');
    return response.data.data;
  } catch (e) {
    console.error('getMethodTag', e);
  }
};

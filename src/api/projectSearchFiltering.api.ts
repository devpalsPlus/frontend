import type { ApiMethodTag, ApiPositionTag, ApiSkillTag } from '../models/tags';
import { httpClient } from './http.api';

export const getSkillTag = async () => {
  try {
    const response = await httpClient.get<ApiSkillTag>('/skill-tag');
    console.log('스킬태그*-*-*-*-*-*-*-*', response.data.data);

    return response.data.data;
  } catch (e) {
    console.log('getSkillTag', e);
  }
};

export const getPositionTag = async () => {
  try {
    const response = await httpClient.get<ApiPositionTag>('/position-tag');
    console.log('포지션태그*-*-*-*-*-*-*-*', response.data.data);
    return response.data.data;
  } catch (e) {
    console.log('getPositionTag', e);
  }
};

export const getMethodTag = async () => {
  try {
    const response = await httpClient.get<ApiMethodTag>('/method-type');
    console.log('메서드태그*-*-*-*-*-*-*-*', response.data.data);
    return response.data.data;
  } catch (e) {
    console.log('getMethodTag', e);
  }
};

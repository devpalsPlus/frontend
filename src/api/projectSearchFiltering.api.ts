import type { MethodTag, PositionTag, SkillTag } from '../models/tags';
import { httpClient } from './http.api';

export const getSkillTag = async () => {
  try {
    const response = await httpClient.get<SkillTag[]>('/skill-tag');
    return response.data;
  } catch (e) {
    console.log('getSkillTag', e);
  }
};

export const getPositionTag = async () => {
  try {
    const response = await httpClient.get<PositionTag[]>('/position-tag');
    return response.data;
  } catch (e) {
    console.log('getPositionTag', e);
  }
};

export const getMethodTag = async () => {
  try {
    const response = await httpClient.get<MethodTag[]>('/method');
    return response.data;
  } catch (e) {
    console.log('getMethodTag', e);
  }
};

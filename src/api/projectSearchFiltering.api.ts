import type { MethodTag, PositionTag, SkillTag } from '../models/tags';
import { httpClient } from './http.api';

export const fetchSkillTag = async () => {
  try {
    const response = await httpClient.get<SkillTag[]>('/skill-tag');
    return response.data;
  } catch (e) {
    console.log('fetchSkillTagE', e);
  }
};

export const fetchPositionTag = async () => {
  try {
    const response = await httpClient.get<PositionTag[]>('/position-tag');
    return response.data;
  } catch (e) {
    console.log('fetchSkillTagE', e);
  }
};

export const fetchMethodTag = async () => {
  try {
    const response = await httpClient.get<MethodTag[]>('/method');
    return response.data;
  } catch (e) {
    console.log('fetchSkillTagE', e);
  }
};

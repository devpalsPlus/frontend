import type {
  MethodTagHeader,
  PositionTagHeader,
  SillTagHeader,
} from '../models/tags';
import { httpClient } from './http.api';

export const getSkillTag = async () => {
  try {
    const response = await httpClient.get<SillTagHeader>('/skill-tag');
    return response.data;
  } catch (e) {
    console.log('getSkillTag', e);
  }
};

export const getPositionTag = async () => {
  try {
    const response = await httpClient.get<PositionTagHeader>('/position-tag');
    return response.data;
  } catch (e) {
    console.log('getPositionTag', e);
  }
};

export const getMethodTag = async () => {
  try {
    const response = await httpClient.get<MethodTagHeader>('/method');
    return response.data;
  } catch (e) {
    console.log('getMethodTag', e);
  }
};

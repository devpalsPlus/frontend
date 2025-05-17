import type { apiEvaluatedUser } from '../models/evaluation';
import { httpClient } from './http.api';

export const postEvaluation = async (userEvaluation: apiEvaluatedUser) => {
  try {
    const response = await httpClient.post(`/evaluations`, userEvaluation);
    return response.status;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getEvaluation = async (projectId: number) => {
  try {
    const response = await httpClient.get(`/evaluations/${projectId}/members`);
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

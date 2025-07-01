import type { ApiReportDetail } from '../../models/admin/userDetail/reportDetail';
import type { ApiAllReports } from '../../models/report';
import type { SearchType } from '../../models/search';
import { httpClient } from '../http.api';

export const postDeleteReport = async (id: number) => {
  try {
    await httpClient.delete(`/report/${id}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getReportDetail = async (reportId: number) => {
  try {
    const response = await httpClient.get<ApiReportDetail>(
      `/report/${reportId}`
    );
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAllReports = async (params: SearchType) => {
  try {
    const response = await httpClient.get<ApiAllReports>(`/report`, { params });
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getAllReportsPreview = async () => {
  try {
    const response = await httpClient.get<ApiAllReports>(`/report`);
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

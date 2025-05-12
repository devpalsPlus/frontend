import { ApiCommonType } from './apiCommon';

export interface FAQ {
  id: number;
  title: string;
  content: string;
}

export interface ApiFAQ extends ApiCommonType {
  data: FAQ[];
}

export interface SearchKeyword {
  keyword: string;
}

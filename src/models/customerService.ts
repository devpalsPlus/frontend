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

export interface Notice extends FAQ {
  createdAt: string;
  viewCount: number;
}

export interface ApiNotice {
  data: Notice[];
}

export interface OtherNotice {
  id: number;
  title: string;
  cratedAt: string;
}

export interface NoticeDetail extends Notice {
  prev: OtherNotice | null;
  next: OtherNotice | null;
}

export interface ApiNoticeDetail {
  data: NoticeDetail;
}

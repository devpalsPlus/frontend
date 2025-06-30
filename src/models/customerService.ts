import type { ApiCommonType } from './apiCommon';

export interface FAQ {
  id: number;
  title: string;
  content: string;
}

export interface ApiFAQ extends ApiCommonType {
  data: FAQ[];
}

export interface FAQDetail extends WriteBody {
  id: number;
}

export interface ApiFAQDetail extends ApiCommonType {
  data: FAQDetail;
}

export interface NoticeList extends OtherNotice {
  content: string;
}

export interface Notice {
  notices: NoticeList[];
  totalPages: string;
}

export interface ApiNotice {
  data: Notice;
}

export interface OtherNotice {
  id: number;
  title: string;
  createdAt: string;
}

export interface NoticeDetail extends NoticeList {
  viewCount: number;
  prev: OtherNotice | null;
  next: OtherNotice | null;
}

export interface ApiNoticeDetail {
  data: NoticeDetail;
}

export interface SearchKeyword {
  keyword: string;
}

export interface NoticeSearch extends SearchKeyword {
  page: number;
}

// admin
export interface WriteBody {
  title: string;
  content: string;
}

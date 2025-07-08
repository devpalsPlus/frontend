import { ApiCommonType } from '../apiCommon';

export interface BannerItem {
  id: number;
  imageUrl: string;
  visible: boolean;
  always: boolean;
  startDate: string;
  endDate: string;
}

export interface BannerFormData {
  imageUrl?: File;
  visible: boolean;
  always: boolean;
  startDate: string;
  endDate: string;
}

// 편집 중인 배너의 변경사항을 추적하기 위한 타입
export interface BannerChanges {
  visible?: boolean;
  always?: boolean;
  startDate?: string;
  endDate?: string;
  newImageFile?: File;
}

export interface ApiBannerList extends ApiCommonType {
  data: BannerItem[];
}

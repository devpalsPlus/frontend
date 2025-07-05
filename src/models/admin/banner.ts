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

export interface ApiBannerList extends ApiCommonType {
  data: BannerItem[];
}

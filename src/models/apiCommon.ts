export interface ApiCommonType {
  success: boolean;
  message: string;
}

export interface ApiCommonBasicType extends ApiCommonType {
  data: boolean;
}

export interface User {
  id: number;
  nickname: string;
  img: string;
}

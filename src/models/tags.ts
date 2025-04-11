import type { ApiCommonType } from './apiCommon';

export interface SkillTag {
  id: number;
  name: string;
  img: string;
  createdAt: string;
}

export interface PositionTag {
  id: number;
  name: string;
  createdAt: string;
}

export interface MethodTag {
  id: number;
  name: string;
  createdAt: string;
}

export interface ApiSkillTag extends ApiCommonType {
  data: SkillTag[];
}

export interface ApiPositionTag extends ApiCommonType {
  data: PositionTag[];
}

export interface ApiMethodTag extends ApiCommonType {
  data: MethodTag[];
}

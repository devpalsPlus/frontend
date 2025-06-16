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
  data: SkillTag[] | null;
}

export interface ApiPositionTag extends ApiCommonType {
  data: PositionTag[] | null;
}

export interface ApiMethodTag extends ApiCommonType {
  data: MethodTag[] | null;
}

export interface TagFormType {
  name: string;
  img?: File | undefined;
}

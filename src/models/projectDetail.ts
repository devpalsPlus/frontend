import type { ApiCommonType, User } from './apiCommon';
import type { MethodTag, PositionTag, SkillTag } from './tags';

export interface ProjectSkillTagList {
  SkillTag: SkillTag;
  projectId: number;
  skillTagId: number;
}

export interface ProjectPositionTag {
  projectId: number;
  positionTagId: number;
  PositionTag: PositionTag;
}

export interface ProjectDetailPlus {
  id: number;
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  views: number;
  isBeginner: boolean;
  isDone: boolean;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  authorId: number;
}

export interface ProjectDetailPlusExtended extends ProjectDetailPlus {
  user: User;
  methodType: MethodTag;
  positions: PositionTag[];
  skills: SkillTag[];
  applicantIds: number[];
  acceptedIds: number[];
}

export interface dataPlus extends ApiCommonType {
  data: ProjectDetailPlus;
}

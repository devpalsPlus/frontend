import { ApiCommonType } from './apiCommon';
import { SkillTag } from './tags';

export interface ManagedProject {
  id: number;
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  authorId: number;
  views: number;
  isBeginner: boolean;
  isDone: boolean;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  createAt: string;
  updateAt: string;
  methodType: MethodType;
  positions: PositionTag[];
  skills: SkillTag[];
}

export interface MethodType {
  id: number;
  name: string;
}

export interface PositionTag {
  id: number;
  name: string;
}

export interface ProjectSkillTag {
  projectId: number;
  skillTagId: number;
  SkillTag: SkillTag;
}

export interface ApiManagedProjects extends ApiCommonType {
  data: ManagedProject[];
}

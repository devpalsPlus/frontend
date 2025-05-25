import type { ApiCommonType } from './apiCommon';
import type { SkillTag } from './tags';

export interface JoinedProject {
  title: string;
  id: number;
  isBeginner: boolean;
  isDone: boolean;
  recruitmentEndDate: string;
  totalMember: number;
  skills: Omit<SkillTag, 'createdAt'>[];
  canEvaluate: boolean;
}

export interface ApiJoinedProject extends ApiCommonType {
  data: JoinedProject[] | null;
}

export interface AppliedProject {
  title: string;
  status: string;
  id: number;
}

export interface ApiAppliedProject extends ApiCommonType {
  data: AppliedProject[] | null;
}

export interface ApiUserProject extends ApiCommonType {
  data: JoinedProject[];
}

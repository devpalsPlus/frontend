import type { ApiCommonType } from './apiCommon';
import type { PositionTag, SkillTag } from './tags';

export interface ProjectSkillTagItem {
  projectId: number;
  skillTagId: number;
  SkillTag: Omit<SkillTag, 'createdAt'>;
}

export interface ProjectPositionTagItem {
  projectId: number;
  positionTagId: number;
  PositionTag: Omit<PositionTag, 'createdAt'>;
}

export interface UserJoinedProject {
  projectId: number;
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  methodId: number;
  isBeginner: boolean;
  isDone: boolean;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  status: string;
  ProjectSkillTag: ProjectSkillTagItem[];
  ProjectPositionTag: ProjectPositionTagItem[];
}

export type MyJoinedProjectList = UserJoinedProject[];

export interface UserJoinedProjectList {
  acceptedProjects: UserJoinedProject[];
  ownProjects: UserJoinedProject[];
}

export interface ApiUserJoinedProjectList {
  data: UserJoinedProject;
}

export interface MyAppliedProjectStatus {
  id: number;
  projectTitle: string;
  status: string;
}

export type MyAppliedProjectStatusList = MyAppliedProjectStatus[];

// 새로하는중
export interface JoinedProject {
  title: string;
  recruitmentEndDate: string;
  TotalMember: number;
  skills: Omit<SkillTag, 'createdAt'>[];
}

export interface ApiJoinedProject extends ApiCommonType {
  data: JoinedProject[] | null;
}

export interface AppliedProject {
  title: string;
  status: string;
}

export interface ApiAppliedProject extends ApiCommonType {
  data: AppliedProject[] | null;
}

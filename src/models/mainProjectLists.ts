import type { PositionTag, SkillTag, MethodTag } from './tags';
import type { ApiCommonType } from './apiCommon';

export interface User {
  id: number;
  nickname: string;
  img: string;
}

export interface ProjectList {
  id: number;
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  views: number;
  isBeginner: boolean;
  isDone: boolean;
  recruitmentEndDate: string;
  recruitmentStartDate: string;
  user: User;
  positions: Omit<PositionTag, 'createdAt'>[];
  skills: Omit<SkillTag, 'createdAt'>[];
  MethodType: Omit<MethodTag, 'createdAt'>;
}

export interface ProjectLists {
  projects: ProjectList[];
  currentPage: number;
  lastPage: number;
  total: number;
}

export interface ApiProjectLists extends ApiCommonType {
  data: ProjectLists;
}

export interface ProjectStatistic {
  ongoingProjectCount: number;
  endProjectCount: number;
  totalProjectCount: number;
}

export interface ApiProjectStatistic extends ApiCommonType {
  data: ProjectStatistic;
}

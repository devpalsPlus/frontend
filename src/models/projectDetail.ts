import { ApiCommonType, User } from './apiCommon';
import { joinProject } from './joinProject';

export interface SkillTag {
  id: number;
  name: string;
  img: string;
  createdAt: string;
}

export interface ProjectSkillTagList {
  SkillTag: SkillTag;
  projectId: number;
  skillTagId: number;
}

export interface PositionTag {
  id: number;
  name: string;
  createdAt: string;
}

export interface ProjectPositionTag {
  projectId: number;
  positionTagId: number;
  PositionTag: PositionTag;
}

export interface Method {
  id: number;
  name: string;
  createdAt: string;
}

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  totalMember: number;
  startDate: string;
  estimatedPeriod: string;
  methodId: number;
  authorId: number;
  views: number;
  isBeginner: boolean;
  isDone: boolean;
  recruitmentEndDate: string;
  recruitmentStartDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectDetailExtended extends ProjectDetail {
  User: User;
  skillTags: SkillTag[];
  ProjectSkillTag: ProjectSkillTagList[];
  Method: Method;
  ProjectPositionTag: ProjectPositionTag[];
  Applicant: joinProject[];
}

export interface Position {
  id: number;
  name: string;
}

export interface Skill {
  id: number;
  name: string;
  img: string;
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
  methodType: Method;
  positions: Position[];
  skills: Skill[];
}

export interface dataPlus extends ApiCommonType {
  data: ProjectDetailPlus;
}

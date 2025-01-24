export interface SkillTag {
  id: number;
  name: string;
  img: string;
}

export interface PositionTag {
  id: number;
  name: string;
}

export interface ProjectSkillTagItem {
  projectId: number;
  skillTagId: number;
  SkillTag: SkillTag;
}

export interface ProjectPositionTagItem {
  projectId: number;
  positionTagId: number;
  PositionTag: PositionTag;
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

export interface MyAppliedProjectStatus {
  id: number;
  projectTitle: string;
  status: string;
}

export type MyAppliedProjectStatusList = MyAppliedProjectStatus[];

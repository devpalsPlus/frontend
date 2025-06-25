import { ApiCommonType } from '../../apiCommon';
import { MethodTag, PositionTag, SkillTag } from '../../tags';
import { AppliedProject, JoinedProject } from '../../userProject';

export interface AuthoredProject {
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
  methodType: MethodTag;
  positions: PositionTag[];
  skills: SkillTag[];
  canEvaluate: boolean;
  isAllEvaluated: boolean;
}

export interface OwnedProject {
  id: number;
  title: string;
  recruitmentEndDate: string;
  totalMember: number;
  isBeginner: boolean;
  isDone: boolean;
  skills: SkillTag[];
  canEvaluate: boolean;
  isAllEvaluated: boolean;
}

export interface MyJoinedProject {
  id: number;
  title: string;
  recruitmentEndDate: string;
  totalMember: number;
  isBeginner: boolean;
  isDone: boolean;
  skills: SkillTag[];
  canEvaluate: boolean;
  isAllEvaluated: boolean;
}

export interface UserProjectData {
  authoredProjects: AuthoredProject[];
  ownedProjects: OwnedProject[];
  joinedProjects: JoinedProject[];
  appliedProjects: AppliedProject[];
  myJoinedProjects: MyJoinedProject[];
}

export interface ApiUserProjectDataResponse extends ApiCommonType {
  data: UserProjectData;
}

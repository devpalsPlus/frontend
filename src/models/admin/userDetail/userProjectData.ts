import { ApiCommonType } from '../../apiCommon';
import { MethodTag, PositionTag, SkillTag } from '../../tags';
import { AppliedProject, JoinedProject } from '../../userProject';

export interface BaseProject {
  id: number;
  title: string;
  recruitmentEndDate?: string;
  totalMember: number;
  isBeginner: boolean;
  isDone: boolean;
  skills: SkillTag[];
  canEvaluate: boolean;
  isAllEvaluated: boolean;
}

export interface AuthoredProject extends BaseProject {
  description: string;
  startDate: string;
  estimatedPeriod: string;
  authorId: number;
  views: number;
  recruitmentStartDate: string;
  createdAt: string;
  updatedAt: string;
  methodType: MethodTag;
  positions: PositionTag[];
}

export interface UserProjectData {
  authoredProjects: AuthoredProject[];
  ownedProjects: BaseProject[];
  joinedProjects: JoinedProject[];
  appliedProjects: AppliedProject[];
  myJoinedProjects: BaseProject[];
}

export interface ApiUserProjectDataResponse extends ApiCommonType {
  data: UserProjectData;
}

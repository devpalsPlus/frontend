import { SkillTag } from './tags';

//model
export interface ManagedProject {
  id: number;
  title: string;
  totalMember: number;
  recruitmentEndDate: string;
  isBeginner: boolean;
  ProjectSkillTag: ProjectSkillTag[];
}

export interface ProjectSkillTag {
  projectId: number;
  skillTagId: number;
  SkillTag: SkillTag;
}

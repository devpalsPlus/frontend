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

export interface SkillTag {
  id: number;
  name: string;
  img: string;
  createdAt: string;
}

//model
export interface ManagedProject {
  id: number;
  title: string;
  totalMember: number;
  recruitmentEndDate: string;
  isBeginner: boolean;
  ProjectSkillTag: SkillTag[];
}

export interface SkillTag {
  id: number;
  name: string;
  img: string;
  createdAt: string;
}

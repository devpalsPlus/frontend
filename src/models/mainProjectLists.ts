export interface User {
  id: number;
  nickname: string;
  email: string;
  bio?: string;
  profileImg?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Method {
  id: number;
  name: string;
  createdAt: string;
}

// export interface ProjectPositionTag {
//   propertyName: type;
// }

export interface ProjectList {
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
  User: User;
  ProjectSkillTag: string[];
  Method: Method;
  ProjectPositionTag: string[];
}

export interface Pagination {
  currentPage: number;
  lastPage: number;
}

export interface ProjectLists {
  projects: ProjectList[];
  currentPage: number;
  lastPage: number;
  total: number;
}

export interface ProjectStatistic {
  ongoingProjectCount: number;
  endProjectCount: number;
  totalProjectCount: number;
}

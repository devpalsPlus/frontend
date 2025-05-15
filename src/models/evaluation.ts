export interface apiEvaluatedUser {
  projectId: number;
  evaluateeId: number;
  scores: number[];
}

export interface apiMemberList {
  projectName: string;
  userData: MemberList[];
}

export interface MemberList {
  userId: number;
  nickname: string;
  evaluated: boolean;
}

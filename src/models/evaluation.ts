export interface apiEvaluatedUser {
  projectId: number;
  evaluateeId: number;
  scores: number[];
}

export interface apiMemberList {
  userId: number;
  nickname: string;
  evaluated: boolean;
}

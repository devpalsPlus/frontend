export interface apiEvaluatedUser {
  projectId: number;
  evaluateeId: number;
  score: number[];
}

export interface apiMemberList {
  userId: number;
  nickname: string;
  evaluated: boolean;
}

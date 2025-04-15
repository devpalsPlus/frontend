import { ApiCommonType, User } from './apiCommon';

export interface GetCommandType extends ApiCommonType {
  data: CommandType[];
}

export interface CommandType {
  id: number;
  content: string;
  user: User;
  commentCount: number;
}

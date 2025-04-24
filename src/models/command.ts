import { ApiCommonType, User } from './apiCommon';

export interface GetCommandType extends ApiCommonType {
  data: CommandType[];
}

export interface ReplyType {
  id: number;
  content: string;
  user: User;
}

export interface CommandType extends ReplyType {
  commentCount: number;
}

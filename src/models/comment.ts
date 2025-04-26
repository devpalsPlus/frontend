import { ApiCommonType, User } from './apiCommon';

export interface GetCommentType extends ApiCommonType {
  data: CommentType[];
}

export interface ReplyType {
  id: number;
  content: string;
  user: User;
}

export interface CommentType extends ReplyType {
  recommentCount: number;
}

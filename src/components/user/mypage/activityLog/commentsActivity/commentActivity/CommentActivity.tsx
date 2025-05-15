import { Link } from 'react-router-dom';
import * as S from './CommentActivity.styled';
import { formatDate } from '../../../../../../util/formatDate';
import { MyComments } from '../../../../../../models/activityLog';

interface CommentActivityProps {
  list: MyComments;
}

export default function CommentActivity({ list }: CommentActivityProps) {
  return (
    <Link to={`/project-detail/${list.projectId}`}>
      <S.CommentContent>{list.content}</S.CommentContent>
      <S.CommentDate>{formatDate(list.createdAt)}</S.CommentDate>
      <S.CommentProject>{list.projectTitle}</S.CommentProject>
    </Link>
  );
}

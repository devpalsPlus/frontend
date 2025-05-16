import * as S from './CommentComponentLayout.styled';
import DropDown from '../../../common/dropDown/DropDown';
import DropDownItem from '../DropDownItem';
import { CommentType } from '../../../../models/comment';
import dropdownButton from '../../../../assets/dropdownButton.svg';
import useComment from '../../../../hooks/user/CommentHooks/useComment';
import ReplyComponent from '../replyComponent/ReplyComponent';
import ArrowDown from '../../../../assets/ArrowDown.svg';
import ArrowUp from '../../../../assets/ArrowUp.svg';
import CommentComponent from './commentComponent/CommentComponent';

interface CommentLayoutProps {
  projectId: number;
  getCommentList: CommentType[];
  createrId?: number;
  loginUserId?: number | undefined;
}

const CommentComponentLayout = ({
  projectId,
  getCommentList,
  createrId,
  loginUserId,
}: CommentLayoutProps) => {
  const {
    activateId,
    activateEditMode,
    onReplyMessage,
    isShowReply,
    handleShowReplyClick,
    handleDropDownClick,
    setActivateEditMode,
    handleActivateClick,
    onEdit,
  } = useComment();

  return (
    <>
      {getCommentList?.map((item, index) => (
        <S.Container key={item.id}>
          <S.CommentContainer>
            <CommentComponent
              item={item}
              activateEditMode={activateEditMode}
              activateId={activateId}
              createrId={createrId}
              handleActivateClick={handleActivateClick}
              index={index}
              loginUserId={loginUserId}
              onReplyMessage={onReplyMessage}
              projectId={projectId}
              setActivateEditMode={setActivateEditMode}
            />
            <DropDown
              toggleButton={
                <img src={dropdownButton} onClick={handleDropDownClick} />
              }
            >
              <DropDownItem
                projectId={projectId}
                commentId={item.id}
                onEdit={() => onEdit(item.id)}
                loginUserId={loginUserId}
                commentUserId={item.user.id}
                reportTitle={item.content}
                activateEditMode={activateEditMode}
              />
            </DropDown>
          </S.CommentContainer>

          <S.ReplyContainer>
            {item.recommentCount !== 0 && (
              <S.ShowReply onClick={() => handleShowReplyClick(item.id)}>
                <S.ShowReplyButton>
                  <S.Icon>
                    {isShowReply ? (
                      <img src={ArrowUp} />
                    ) : (
                      <img src={ArrowDown} />
                    )}
                  </S.Icon>
                  <S.ReplyContent>
                    {item.recommentCount}개 답글 확인
                  </S.ReplyContent>
                </S.ShowReplyButton>
              </S.ShowReply>
            )}

            {isShowReply === item.id && (
              <S.ReplyContainer>
                <ReplyComponent
                  projectId={projectId}
                  loginUserId={loginUserId}
                  commentId={item.id}
                />
              </S.ReplyContainer>
            )}
          </S.ReplyContainer>
        </S.Container>
      ))}
    </>
  );
};

export default CommentComponentLayout;

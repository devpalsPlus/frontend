import Avatar from '../../common/avatar/Avatar';
import * as S from './ReplyComponent.styled';
import DefaultImg from '../../../assets/defaultImg.png';
import useCommand from '../../../hooks/CommandHooks/useCommand';
import DropDown from '../../common/dropDown/DropDown';
import DropDownItem from '../../common/dropDown/DropDownItem';
import dropdownButton from '../../../assets/dropdownButton.svg';
import CommandInput from '../commandInput/CommandInput';
import useGetReply from '../../../hooks/CommandHooks/useGetReply';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';

interface ReplyComponentProps {
  projectId: number;
  loginUserId: number | undefined;
  commentId: number;
}

const ReplyComponent = ({
  projectId,
  loginUserId,
  commentId,
}: ReplyComponentProps) => {
  const { onEdit, setActivateEditMode, handleDropDownClick, activateEditMode } =
    useCommand();

  const { getReplyList, isLoading, isFetching } = useGetReply(
    projectId,
    commentId
  );

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return getReplyList?.map((item, index) => (
    <S.Container key={index}>
      <S.Wrapper>
        <Avatar size={'45px'} image={DefaultImg} />
        <S.CommandWrapper>
          <S.NickName>{item.user.nickname}</S.NickName>
          {activateEditMode === item.id ? (
            <CommandInput
              activateEditMode={activateEditMode}
              recomment={item.content}
              projectId={projectId}
              commandId={commentId}
              recommentId={item.id}
              setActivateEditMode={setActivateEditMode}
              reply={true}
            />
          ) : (
            <S.Command>{item.content}</S.Command>
          )}
        </S.CommandWrapper>
      </S.Wrapper>
      <DropDown
        toggleButton={
          <img src={dropdownButton} onClick={handleDropDownClick} />
        }
      >
        <DropDownItem
          projectId={projectId}
          commandId={commentId}
          recommentId={item.id}
          onEdit={() => onEdit(item.id)}
          loginUserId={loginUserId}
          commandUserId={item.user.id}
          activateEditMode={activateEditMode}
          reply={true}
        />
      </DropDown>
    </S.Container>
  ));
};

export default ReplyComponent;

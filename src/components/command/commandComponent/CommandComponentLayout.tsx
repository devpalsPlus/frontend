import * as S from './CommandComponentLayout.styled';
import DropDown from '../../common/dropDown/DropDown';
import DropDownItem from '../../common/dropDown/DropDownItem';
import { CommandType } from '../../../models/command';
import dropdownButton from '../../../assets/dropdownButton.svg';
import useCommand from '../../../hooks/CommandHooks/useCommand';
import ReplyComponent from '../replyComponent/ReplyComponent';
import ArrowDown from '../../../assets/ArrowDown.svg';
import ArrowUp from '../../../assets/ArrowUp.svg';
import CommandComponent from './CommandComponent/CommandComponent';

interface CommandLayoutProps {
  projectId: number;
  getCommandList: CommandType[] | undefined;
  createrId?: number;
  loginUserId?: number | undefined;
}

const CommandComponentLayout = ({
  projectId,
  getCommandList,
  createrId,
  loginUserId,
}: CommandLayoutProps) => {
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
  } = useCommand();

  return (
    <>
      {getCommandList?.map((item, index) => (
        <S.Container key={index}>
          <S.CommandContainer>
            <CommandComponent
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
                commandId={item.id}
                onEdit={() => onEdit(item.id)}
                loginUserId={loginUserId}
                commandUserId={item.user.id}
                activateEditMode={activateEditMode}
              />
            </DropDown>
          </S.CommandContainer>

          <S.ReplyContainer>
            <S.ShowReply onClick={() => handleShowReplyClick(item.id)}>
              <S.ShowReplyButton>
                <S.Icon>
                  {isShowReply ? (
                    <img src={ArrowUp} />
                  ) : (
                    <img src={ArrowDown} />
                  )}
                </S.Icon>
                <S.ReplyContent>답글 확인하기</S.ReplyContent>
              </S.ShowReplyButton>
            </S.ShowReply>
            {isShowReply === item.id && (
              <S.ReplyContainer>
                <ReplyComponent
                  projectId={projectId}
                  createrId={createrId}
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

export default CommandComponentLayout;

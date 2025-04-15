import { useState } from 'react';
import * as S from './CommandComponent.styled';
import Avatar from '../../common/avatar/Avatar';
import DefaultImg from '../../../assets/defaultImg.png';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import CommandInput from '../commandInput/CommandInput';
import { CiMenuKebab } from 'react-icons/ci';
import DropDown from '../../common/dropDown/DropDown';
import DropDownItem from '../../common/dropDown/DropDownItem';
import { CommandType } from '../../../models/command';

interface CommandLayoutProps {
  projectId: number;
  getCommandList: CommandType[] | undefined;
  reply?: boolean;
}

const CommandComponent = ({
  projectId,
  getCommandList,
  reply,
}: CommandLayoutProps) => {
  const [activeReplyId, setActiveReplyId] = useState<number | null>(null);
  const [activateEditMode, setActivateEditMode] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = (commandId: number) => {
    setActiveReplyId((prev) => (prev === commandId ? null : commandId));
  };

  console.log(activateEditMode);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  const onEdit = (commandId: number) => {
    setActivateEditMode((prev) => (prev === commandId ? null : commandId));
  };

  return (
    <>
      {getCommandList?.map((item, index) => (
        <S.Container>
          <S.Wrapper key={index}>
            <Avatar size={reply ? '25px' : '45px'} image={DefaultImg} />
            <S.CommandWrapper>
              <S.NickName>{item.user.nickname}</S.NickName>
              {activateEditMode === item.id ? (
                <CommandInput
                  activateEditMode={activateEditMode}
                  command={item.content}
                  projectId={projectId}
                />
              ) : (
                <S.Command>{item.content}</S.Command>
              )}
              {!reply && (
                <S.ReplyButton onClick={() => handleClick(item.id)}>
                  <S.Icon>
                    <IoChatbubbleEllipsesOutline />
                  </S.Icon>
                  <S.ReplyContent>댓글 달기</S.ReplyContent>
                </S.ReplyButton>
              )}
              {activeReplyId === item.id && (
                <S.ReplyInput>
                  <CommandInput reply={true} projectId={projectId} />
                </S.ReplyInput>
              )}
            </S.CommandWrapper>
          </S.Wrapper>
          <DropDown toggleButton={<CiMenuKebab size='20' onClick={onClick} />}>
            <DropDownItem
              projectId={projectId}
              commandId={item.id}
              onEdit={() => onEdit(item.id)}
              activateEditMode={activateEditMode}
            />
          </DropDown>
        </S.Container>
      ))}
    </>
  );
};

export default CommandComponent;

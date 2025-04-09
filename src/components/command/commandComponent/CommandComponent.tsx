import { useState } from 'react';
import * as S from './CommandComponent.styled';
import Avatar from '../../common/avatar/Avatar';
import DefaultImg from '../../../assets/defaultImg.png';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import CommandInput from '../commandInput/CommandInput';
import { CiMenuKebab } from 'react-icons/ci';
import DropDown from '../../common/dropDown/DropDown';
import DropDownItem from '../../common/dropDown/DropDownItem';
import useDropDownItem from '../../../hooks/useDropDownItem';

interface CommandLayoutProps {
  data: [];
  reply?: boolean;
}

const command = '안녕하세요';

const CommandComponent = ({ data, reply }: CommandLayoutProps) => {
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { onReport, onEdit, onDelete, isEditMode } = useDropDownItem();

  const handleClick = () => {
    setShowReplyInput(!showReplyInput);
  };

  console.log(isEditMode);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <S.Container>
      {/* 전체를 map으로 감싸 하기 */}
      <S.Wrapper>
        <Avatar size={reply ? '55px' : '75px'} image={DefaultImg} />
        <S.CommandWrapper>
          <S.NickName>SeungYeon</S.NickName>
          {isEditMode ? (
            <CommandInput
              isEditMode={isEditMode}
              onEdit={onEdit}
              command={command}
            />
          ) : (
            <S.Command>{command}</S.Command>
          )}
          {!reply && (
            <S.ReplyButton onClick={handleClick}>
              <S.Icon>
                <IoChatbubbleEllipsesOutline />
              </S.Icon>
              <S.ReplyContent>댓글 달기</S.ReplyContent>
            </S.ReplyButton>
          )}
          {showReplyInput && (
            <S.ReplyInput>
              <CommandInput reply={true} />
            </S.ReplyInput>
          )}
        </S.CommandWrapper>
      </S.Wrapper>
      <DropDown toggleButton={<CiMenuKebab size='20' onClick={onClick} />}>
        <DropDownItem
          commandId={4}
          onReport={onReport}
          onEdit={onEdit}
          onDelete={onDelete}
          isEditMode={isEditMode}
        />
      </DropDown>
    </S.Container>
  );
};

export default CommandComponent;

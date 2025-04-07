import React, { useState } from 'react';
import * as S from './CommandComponent.styled';
import Avatar from '../../common/avatar/Avatar';
import DefaultImg from '../../../assets/defaultImg.png';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import CommandInput from '../commandInput/CommandInput';
import { CiMenuKebab } from 'react-icons/ci';

interface CommandLayoutProps {
  data: [];
  reply?: boolean;
}

const CommandComponent = ({ data, reply }: CommandLayoutProps) => {
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const handleClick = () => {
    setShowReplyInput(!showReplyInput);
  };

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Avatar size={reply ? '55px' : '75px'} image={DefaultImg} />
        <S.CommandWrapper>
          <S.NickName>SeungYeon</S.NickName>
          <S.Command>안녕하세요</S.Command>
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
      <CiMenuKebab size='20' onClick={onClick} />
    </S.Container>
  );
};

export default CommandComponent;

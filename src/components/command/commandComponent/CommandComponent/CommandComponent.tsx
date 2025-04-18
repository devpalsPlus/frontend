import React, { Dispatch, SetStateAction } from 'react';
import * as S from './CommandComponent.styled';
import Avatar from '../../../common/avatar/Avatar';
import { CommandType } from '../../../../models/command';
import chat from '../../../../assets/chat.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import CommandInput from '../../commandInput/CommandInput';

interface CommandComponentProps {
  item: CommandType;
  index: number;
  activateEditMode: number | null;
  setActivateEditMode: Dispatch<SetStateAction<number | null>>;
  handleActivateClick: (
    id: number,
    createrId: number | undefined,
    loginUserId: number | undefined
  ) => void;
  createrId: number | undefined;
  loginUserId: number | undefined;
  activateId: number | null;
  onReplyMessage: boolean;
  projectId: number;
}

const CommandComponent = ({
  item,
  index,
  activateEditMode,
  setActivateEditMode,
  handleActivateClick,
  createrId,
  loginUserId,
  activateId,
  onReplyMessage,
  projectId,
}: CommandComponentProps) => {
  return (
    <S.Container>
      <S.Wrapper key={index}>
        <Link to={`${ROUTES.userpage}/${item.user.id}`}>
          <Avatar size={'55px'} image={item.user.img} />
        </Link>
        <S.CommandWrapper>
          <S.NickName>{item.user.nickname}</S.NickName>
          {activateEditMode === item.id ? (
            <CommandInput
              activateEditMode={activateEditMode}
              command={item.content}
              projectId={projectId}
              commandId={item.id}
              setActivateEditMode={setActivateEditMode}
            />
          ) : (
            <S.Command>{item.content}</S.Command>
          )}

          <S.ReplyInputButton
            onClick={() => handleActivateClick(item.id, createrId, loginUserId)}
          >
            <S.Icon>
              <img src={chat} />
            </S.Icon>
            <S.ReplyContent>댓글 달기</S.ReplyContent>
          </S.ReplyInputButton>

          {activateId === item.id && onReplyMessage && (
            <S.ErrorMessage>
              <S.Message>프로젝트 생성자만 답글을 달 수 있습니다.</S.Message>
            </S.ErrorMessage>
          )}

          {activateId === item.id &&
            (createrId === loginUserId || item.user.id === loginUserId) && (
              <S.ReplyInput>
                <CommandInput
                  reply={true}
                  projectId={projectId}
                  commandId={item.id}
                />
              </S.ReplyInput>
            )}
        </S.CommandWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default CommandComponent;

import { useState } from 'react';
import * as S from './CommandLayout.styled';
import CommandComponent from './commandComponent/CommandComponent';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import CommandInput from './commandInput/CommandInput';
import useGetCommand from '../../hooks/CommandHooks/useGetCommand';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';

interface CommandLayoutProps {
  projectId: number;
}

const CommandLayout = ({ projectId }: CommandLayoutProps) => {
  const [isShowReply, setIsShowReply] = useState<boolean>(false);

  const { getCommandList, isLoading, isFetching, isError } =
    useGetCommand(projectId);

  const handleClick = () => {
    setIsShowReply(!isShowReply);
  };

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error(isError);
  }

  return (
    <S.Container>
      <S.CommandCountsContainer>
        <S.Count>댓글 {getCommandList?.length}개</S.Count>
      </S.CommandCountsContainer>

      <S.CommandInput>
        <CommandInput projectId={projectId} />
      </S.CommandInput>

      <S.CommandContainer>
        <CommandComponent
          getCommandList={getCommandList}
          projectId={projectId}
        />
      </S.CommandContainer>

      <S.ShowReply onClick={handleClick}>
        <S.ShowReplyButton>
          <S.Icon>{isShowReply ? <IoIosArrowUp /> : <IoIosArrowDown />}</S.Icon>
          <S.Content>답글 확인하기</S.Content>
        </S.ShowReplyButton>
      </S.ShowReply>

      {isShowReply && (
        <S.ReplyContainer>
          <CommandComponent
            getCommandList={getCommandList}
            reply={true}
            projectId={projectId}
          />
        </S.ReplyContainer>
      )}
    </S.Container>
  );
};

export default CommandLayout;

import * as S from './CommandLayout.styled';
import CommandComponent from './commandComponent/CommandComponentLayout';
import CommandInput from './commandInput/CommandInput';
import useGetCommand from '../../hooks/CommandHooks/useGetCommand';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';

interface CommandLayoutProps {
  projectId: number;
  createrId: number;
  loginUserId: number | undefined;
}

const CommandLayout = ({
  projectId,
  createrId,
  loginUserId,
}: CommandLayoutProps) => {
  const { getCommandList, isLoading, isFetching, isError } =
    useGetCommand(projectId);

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
        <CommandInput projectId={projectId} commandId={0} />
      </S.CommandInput>

      <S.CommandContainer>
        <CommandComponent
          getCommandList={getCommandList}
          projectId={projectId}
          createrId={createrId}
          loginUserId={loginUserId}
        />
      </S.CommandContainer>
    </S.Container>
  );
};

export default CommandLayout;

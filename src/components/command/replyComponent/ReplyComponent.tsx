import Avatar from '../../common/avatar/Avatar';
import * as S from './ReplyComponent.styled';
import DefaultImg from '../../../assets/defaultImg.png';
import useCommand from '../../../hooks/CommandHooks/useCommand';
import DropDown from '../../common/dropDown/DropDown';
import DropDownItem from '../../common/dropDown/DropDownItem';
import dropdownButton from '../../../assets/dropdownButton.svg';
import CommandInput from '../commandInput/CommandInput';

interface ReplyComponentProps {
  projectId: number;
  createrId: number | undefined;
  loginUserId: number | undefined;
}

const ReplyComponent = ({
  projectId,
  createrId,
  loginUserId,
}: ReplyComponentProps) => {
  const {
    onEdit,
    setActivateEditMode,
    handleDropDownClick,
    activateId,
    activateEditMode,
    onReplyMessage,
  } = useCommand();

  return (
    <S.Container>
      <S.Wrapper>
        <Avatar size={'45px'} image={DefaultImg} />
        <S.CommandWrapper>
          <S.NickName>닉네임</S.NickName>
          {activateEditMode === 1 ? ( // reply에서 반복된 개체의 요소로 변경(item. id)
            <CommandInput
              activateEditMode={activateEditMode}
              command={'item.content'}
              projectId={projectId}
              commandId={1} // commandId(item.di)
              setActivateEditMode={setActivateEditMode}
            />
          ) : (
            <S.Command>'item.content'</S.Command> // item.content
          )}

          {activateId === 1 && // reply에서 반복된 개체의 요소로 변경(item. id)
            onReplyMessage && (
              <S.ErrorMessage>
                <S.Message>프로젝트 생성자만 답글을 달 수 있습니다.</S.Message>
              </S.ErrorMessage>
            )}
          {activateId === 1 && // reply에서 반복된 개체의 요소로 변경(item. id)
            createrId === loginUserId && (
              <S.ReplyInput>
                <CommandInput
                  reply={true}
                  projectId={projectId}
                  commandId={1} //item.id
                />
              </S.ReplyInput>
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
          commandId={1} //item.id
          onEdit={() => onEdit(1)} //item.id
          loginUserId={loginUserId}
          commandUserId={1} //item.user.id
          activateEditMode={activateEditMode}
        />
      </DropDown>
    </S.Container>
  );
};

export default ReplyComponent;

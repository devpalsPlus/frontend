import * as S from './EvaluationContent.styled';
import ScrollPreventor from '../../common/modal/ScrollPreventor';
import useEvaluationStep from '../../../hooks/user/evaluationHooks/useEvaluationStep';
import type { MemberList } from '../../../models/evaluation';
import { optionLabels, questions } from '../../../constants/user/evaluation';
interface EvaluationContentProps {
  projectId: number;
  projectName: string;
  memberList: MemberList[];
  isAllEvaluated: boolean;
}

const EvaluationContent = ({
  projectId,
  projectName,
  memberList,
  isAllEvaluated,
}: EvaluationContentProps) => {
  const {
    step,
    notDone,
    completedMember,
    handleClickLeftUser,
    handleClickOption,
    handleNextStep,
    handleCompletedMember,
    currentScores,
    isNotFill,
  } = useEvaluationStep({ projectId, memberList });

  return (
    <ScrollPreventor>
      <S.Container>
        <S.SidebarLeft>
          <S.ProjectName>{projectName}</S.ProjectName>
          {notDone.map((name, idx) => (
            <S.ParticipantButton
              key={name.userId}
              $active={step === idx}
              onClick={() => handleClickLeftUser(idx)}
            >
              {name.nickname}
            </S.ParticipantButton>
          ))}
        </S.SidebarLeft>

        <S.MainContent>
          <S.Header>
            <S.Title>
              {isAllEvaluated
                ? '평가가 완료 되었습니다. '
                : completedMember
                ? `${completedMember.nickname}님 평가 결과`
                : `${notDone[step]?.nickname}님 평가하기`}
            </S.Title>
            {!completedMember && (
              <S.SubmitButton
                size='primary'
                schema='primary'
                radius='primary'
                onClick={handleNextStep}
              >
                제출하기
              </S.SubmitButton>
            )}
          </S.Header>
          <S.MessageContainer>
            {isNotFill && !completedMember && (
              <S.ErrorMessage>모든 질문에 답변해주세요.</S.ErrorMessage>
            )}
          </S.MessageContainer>

          <S.ScrollArea>
            {questions.map((q, questionNumber) => (
              <S.QuestionBlock key={questionNumber}>
                <S.QuestionHeader>
                  {questionNumber + 1}. {q}
                </S.QuestionHeader>
                <S.Options>
                  {optionLabels.map((label, optionValue) => (
                    <S.Option key={optionValue}>
                      <S.Radio
                        type='radio'
                        name={`q${questionNumber}`}
                        id={`q${questionNumber}_o${optionValue}`}
                        checked={
                          currentScores[questionNumber] === optionValue + 1
                        }
                        onChange={() =>
                          handleClickOption(questionNumber, optionValue)
                        }
                        value={optionValue + 1}
                        disabled={!!completedMember}
                      />
                      <S.RadioLabel>{optionValue + 1}</S.RadioLabel>
                      <S.OptionLabel>{label}</S.OptionLabel>
                    </S.Option>
                  ))}
                </S.Options>
              </S.QuestionBlock>
            ))}
          </S.ScrollArea>
        </S.MainContent>

        <S.SidebarRight>
          <S.CompletedTitle>평가완료</S.CompletedTitle>
          {memberList
            .filter((memberData) => memberData.evaluated)
            .map((memberData) => (
              <S.CompletedButton
                key={memberData.userId}
                onClick={() =>
                  handleCompletedMember(
                    memberData.userId,
                    memberData.nickname,
                    memberData.scores
                  )
                }
              >
                {memberData.nickname}
              </S.CompletedButton>
            ))}
        </S.SidebarRight>
      </S.Container>
    </ScrollPreventor>
  );
};

export default EvaluationContent;

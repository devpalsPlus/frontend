import * as S from './EvaluationContent.styled';
import ScrollPreventor from '../common/modal/ScrollPreventor';
import useEvaluationStep from '../../hooks/evaluationHooks/useEvaluationStep';
import { apiMemberList } from '../../models/evaluation';
import { optionLabels, questions } from '../../constants/evaluation';

interface EvaluationContentProps {
  projectId: number;
  memberList: apiMemberList[];
}

const EvaluationContent = ({
  projectId,
  memberList,
}: EvaluationContentProps) => {
  const {
    step,
    notDone,
    handleClickLeftUser,
    handleClickOption,
    handleNextStep,
    currentScores,
    isNotFill,
  } = useEvaluationStep({ projectId, memberList });

  return (
    <ScrollPreventor>
      <S.Container>
        <S.SidebarLeft>
          <S.ProjectName>프로젝트 이름</S.ProjectName>
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
            <S.Title>{notDone[step]?.nickname}님 평가하기</S.Title>
            <S.SubmitButton
              size='primary'
              schema='primary'
              radius='primary'
              onClick={handleNextStep}
            >
              제출하기
            </S.SubmitButton>
          </S.Header>
          <S.MessageContainer>
            {isNotFill && (
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
          {notDone
            .filter((memberData) => memberData.evaluated)
            .map((memberData) => memberData.nickname)}
        </S.SidebarRight>
      </S.Container>
    </ScrollPreventor>
  );
};

export default EvaluationContent;

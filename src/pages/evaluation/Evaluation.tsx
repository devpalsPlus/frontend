import { useParams } from 'react-router-dom';
import ScrollPreventor from '../../components/common/modal/ScrollPreventor';
import { optionLabels, questions } from '../../constants/evaluation';
import useEvaluationStep from '../../hooks/evaluationHooks/useEvaluationStep';
import * as S from './Evaluation.styled';

const participants = ['홍길동', '김철수', '이영희', '박민수', '최유리'];
const completedParticipants = ['홍길동', '김철수'];

const Evaluation = () => {
  const projectData = Number(useParams().projectId);
  const {
    step,
    notDone,
    handleClickLeftUser,
    handleClickOption,
    handleNextStep,
    currentScores,
    isNotFill,
  } = useEvaluationStep(projectData, participants);

  return (
    <ScrollPreventor>
      <S.Container>
        <S.SidebarLeft>
          <S.ProjectName>프로젝트 이름</S.ProjectName>
          {notDone.map((name, idx) => (
            <S.ParticipantButton
              key={name}
              $active={step === idx}
              onClick={() => handleClickLeftUser(idx)}
            >
              {name}
            </S.ParticipantButton>
          ))}
        </S.SidebarLeft>

        <S.MainContent>
          <S.Header>
            <S.Title>{notDone[step]}님 평가하기</S.Title>
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
          {/* 완료된 인원 API */}
          {completedParticipants.map((evaluatedUser, idx) => (
            <S.CompletedButton key={idx}>{evaluatedUser}</S.CompletedButton>
          ))}
        </S.SidebarRight>
      </S.Container>
    </ScrollPreventor>
  );
};

export default Evaluation;

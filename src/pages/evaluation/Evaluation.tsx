import { optionLabels, questions } from '../../constants/evaluation';
import useEvaluationStep from '../../hooks/useEvaluationStep';
import * as S from './Evaluation.styled';

const participants = ['홍길동', '김철수', '이영희', '박민수', '최유리'];

const Evaluation = () => {
  const {
    step,
    notDone,
    done,
    handleClickLeftUser,
    handleClickOption,
    handleNextStep,
    currentScores,
  } = useEvaluationStep(participants);
  return (
    <S.Container>
      <S.SidebarLeft>
        <S.ProjectName>프로젝트 이름</S.ProjectName>
        {notDone.map((name, idx) => (
          <S.ParticipantButton
            key={name}
            active={step === idx}
            onClick={() => handleClickLeftUser(idx)}
          >
            {name}
          </S.ParticipantButton>
        ))}
      </S.SidebarLeft>

      <S.MainContent>
        <S.Header>
          <S.Title>{notDone[step]}님 평가하기</S.Title>
          <S.Subtitle>참여자에 대한 질문 몇 가지를 해볼게요.</S.Subtitle>
          <S.SubmitButton onClick={handleNextStep}>제출하기</S.SubmitButton>
        </S.Header>

        {questions.map((q, questionNumber) => (
          <S.QuestionBlock key={questionNumber}>
            <S.QuestionHeader>
              {questionNumber + 1}. {q}
            </S.QuestionHeader>
            <S.Options>
              {optionLabels.map((label, optionValue) => (
                <S.Option
                  key={optionValue}
                  onClick={() => handleClickOption(questionNumber, optionValue)}
                >
                  <S.Radio
                    type='radio'
                    name={`q${questionNumber}`}
                    id={`q${questionNumber}_o${optionValue}`}
                    checked={currentScores[questionNumber] === optionValue + 1}
                    value={optionValue + 1}
                  />
                  <S.RadioLabel>{optionValue + 1}</S.RadioLabel>
                  <S.OptionLabel>{label}</S.OptionLabel>
                </S.Option>
              ))}
            </S.Options>
          </S.QuestionBlock>
        ))}
      </S.MainContent>

      <S.SidebarRight>
        <S.CompletedTitle>평가완료</S.CompletedTitle>
        {done.map((evaluatedUser, idx) => (
          <S.CompletedButton key={idx}>
            {evaluatedUser.evaluatee}
          </S.CompletedButton>
        ))}
      </S.SidebarRight>
    </S.Container>
  );
};

export default Evaluation;

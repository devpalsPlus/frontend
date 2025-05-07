import { useMemo, useState } from 'react';
import { evaluatedUser } from '../../models/evaluation';
import { questions } from '../../constants/evaluation';
import { usePostEvaluation } from './usePostEvaluation';

const useEvaluationStep = (projectData: number, participants: string[]) => {
  const questionLength = questions.length;

  const [step, setStep] = useState<number>(0);
  const [notDone, setNotDone] = useState<string[]>(participants);
  const [progress, setProgress] = useState<Record<string, number[]>[]>(() =>
    participants.map((name) => ({
      [name]: Array(questionLength).fill(0),
    }))
  );
  const [done, setDone] = useState<evaluatedUser[]>([]);
  const [isNotFill, setIsNotFill] = useState<boolean>(false);

  const { createEvaluation } = usePostEvaluation(projectData);

  const user = notDone[step];

  const handleClickLeftUser = (idx: number) => {
    setIsNotFill(false);
    setStep(idx);
  };

  const handleClickOption = (questionNumber: number, optionValue: number) => {
    const realValue = optionValue + 1;

    setProgress((prev) =>
      prev.map((record) =>
        user in record
          ? {
              [user]: record[user].map((v, i) =>
                i === questionNumber ? realValue : v
              ),
            }
          : record
      )
    );
  };
  const handleNextStep = () => {
    const record = progress.find((r) => user in r);
    const scores = record ? record[user] : [];

    if (scores.some((v) => v === 0)) {
      setIsNotFill(true);
      return;
    } else {
      setIsNotFill(false);
      // createEvaluation(user);

      setDone((prev) => [...prev, { evaluatee: user, score: scores }]);
      setNotDone((prev) => prev.filter((e) => e !== user));
    }
  };

  const currentScores = useMemo(() => {
    const record = progress.find((r) => user in r);
    return record ? record[user] : Array(questionLength).fill(0);
  }, [progress, questionLength, user]);

  return {
    done,
    step,
    handleClickLeftUser,
    handleClickOption,
    handleNextStep,
    notDone,
    currentScores,
    isNotFill,
  };
};

export default useEvaluationStep;

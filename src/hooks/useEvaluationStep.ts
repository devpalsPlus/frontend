import { useEffect, useMemo, useState } from 'react';
import { evaluatedUser } from '../models/evaluation';
import { questions } from '../constants/evaluation';

const useEvaluationStep = (participants: string[]) => {
  const questionLength = questions.length;

  const [step, setStep] = useState<number>(0);
  const [notDone, setNotDone] = useState<string[]>(participants);
  const [progress, setProgress] = useState<Record<string, number[]>[]>(() =>
    participants.map((name) => ({
      [name]: Array(questionLength).fill(0),
    }))
  );
  const [done, setDone] = useState<evaluatedUser[]>([]);

  const handleClickLeftUser = (idx: number) => {
    setStep(idx);
  };

  const handleClickOption = (questionNumber: number, optionValue: number) => {
    const user = notDone[step];
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
    const user = notDone[step];
    const record = progress.find((r) => user in r);
    const scores = record ? record[user] : [];

    if (scores.some((v) => v === 0)) {
      alert('모든 항목을 평가해주세요.');
      return;
    }

    setDone((prev) => [...prev, { evaluatee: user, score: scores }]);

    const newNotDone = notDone.filter((name) => name !== user);
    setNotDone(newNotDone);

    let nextStep = step;
    if (newNotDone.length === 0) {
      nextStep = 0;
    } else if (step >= newNotDone.length) {
      nextStep = newNotDone.length - 1;
    }
    setStep(nextStep);
  };

  const currentScores = useMemo(() => {
    const user = notDone[step];
    const record = progress.find((r) => user in r);
    return record ? record[user] : Array(questionLength).fill(0);
  }, [progress, notDone, step, questionLength]);

  return {
    done,
    step,
    handleClickLeftUser,
    handleClickOption,
    handleNextStep,
    notDone,
    currentScores,
  };
};

export default useEvaluationStep;

import { useEffect, useMemo, useState } from 'react';
<<<<<<< HEAD
=======
import { MemberList } from '../../../models/evaluation';
import { questions } from '../../../constants/user/evaluation';
>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)
import { usePostEvaluation } from './usePostEvaluation';
import { MemberList } from '../../../models/evaluation';
import { questions } from '../../../constants/user/evaluation';

interface useEvaluationStepProps {
  projectId: number;
  memberList: MemberList[];
}

const useEvaluationStep = ({
  projectId,
  memberList = [],
}: useEvaluationStepProps) => {
  const questionLength = questions.length;
  const [step, setStep] = useState<number>(0);
  const [notDone, setNotDone] = useState<MemberList[]>([]);
  const [progress, setProgress] = useState<Record<number, number[]>[]>([]);
  const [isNotFill, setIsNotFill] = useState<boolean>(false);

  const { createEvaluation } = usePostEvaluation(projectId);

  useEffect(() => {
    if (memberList.length === 0) return;

    setNotDone(memberList.filter((m) => !m.evaluated));

    setProgress(
      memberList.map((m) => ({
        [m.userId]: Array(questionLength).fill(0),
      }))
    );

    setStep(0);
    setIsNotFill(false);
  }, [memberList, questionLength]);

  const user = notDone[step]?.userId;

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
    if (user == null) return;

    const record = progress.find((r) => user in r);
    const scores = record ? record[user] : [];

    if (scores.some((v) => v === 0)) {
      setIsNotFill(true);
      return;
    } else {
      setIsNotFill(false);
      createEvaluation({
        projectId: projectId,
        evaluateeId: user,
        scores: scores,
      });

      setNotDone((prev) => prev.filter((e) => e.userId !== user));
    }
  };

  const currentScores = useMemo(() => {
    const record = progress.find((r) => user in r);
    return record ? record[user] : Array(questionLength).fill(0);
  }, [progress, questionLength, user]);

  return {
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

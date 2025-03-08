import { useState, ReactElement } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { ApplySchemeType } from '../pages/apply/Apply';

export type StepProp = {
  title: string;
  element: ReactElement;
};

const useMultiStepForm = (
  getValues: UseFormGetValues<ApplySchemeType>,
  steps: StepProp[]
) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () => {
    setCurrentStepIndex((index) => (index <= 0 ? 0 : index - 1));
  };

  const next = () => {
    console.log(getValues());
    setCurrentStepIndex((index) =>
      index >= steps.length - 1 ? index : index + 1
    );
  };

  return {
    currentStepIndex,
    currentTitle: steps[currentStepIndex].title,
    currentStep: steps[currentStepIndex].element,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    prev,
    next,
  };
};

export default useMultiStepForm;

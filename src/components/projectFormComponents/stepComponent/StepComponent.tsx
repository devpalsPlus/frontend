import React, { Dispatch, SetStateAction } from 'react';
import * as S from './StepComponent.styled';
import { StepProp } from '../../../hooks/useMultiStepForm';

type StepComponentProps = {
  steps: StepProp[];
  currentStepIndex: number;
  setCurrentStepIndex: Dispatch<SetStateAction<number>>;
};

const StepComponent: React.FC<StepComponentProps> = ({
  steps,
  currentStepIndex,
  setCurrentStepIndex,
}) => {
  const handleClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  return (
    <S.Container>
      <S.Line />
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;

        return (
          <S.StepWrapper key={index}>
            <S.Circle
              isActive={isActive}
              onClick={() => handleClick(index)}
            ></S.Circle>
            <S.Label>{step.title}</S.Label>
          </S.StepWrapper>
        );
      })}
    </S.Container>
  );
};

export default StepComponent;

import React from 'react';
import * as S from './StepComponent.styled';
import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { StepProp } from '../../../hooks/useMultiStepForm';

type StepComponentProps = {
  steps: StepProp[];
  currentStepIndex: number;
};

const StepComponent: React.FC<StepComponentProps> = ({
  steps,
  currentStepIndex,
}) => {
  return (
    <S.Container>
      <S.Line />
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;

        return (
          <S.StepWrapper key={index}>
            <S.Circle isActive={isActive}></S.Circle>
            <S.Label>{step.title}</S.Label>
          </S.StepWrapper>
        );
      })}
    </S.Container>
  );
};

export default StepComponent;

import * as S from './ApplyStep.styled';
import Input from '../../components/projectFormComponents/inputComponent/InputComponent';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../util/format';
import { ApplySchemeType, joinProject } from '../../models/joinProject';
import CareersComponent from '../../components/applyComponents/careersComponent/CareersComponent';
import PhoneComponent from '../../components/applyComponents/phoneComponent/PhoneComponent';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import useAuthStore from '../../store/authStore';
import { useEffect } from 'react';
import useMultiStepForm from '../../hooks/ProjectHooks/useMultiStepForm';
import StepComponent from '../../components/projectFormComponents/stepComponent/StepComponent';
import Button from '../../components/common/Button/Button';
import useGetProjectData from '../../hooks/useGetProjectData';
import useApplyProject from '../../hooks/ProjectHooks/useApplyProject';
import { ApplyScheme } from '../../constants/projectConstants';

const Apply = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const { isOpen, handleModalOpen, handleModalClose, message } = useModal();
  const { data: projectData, isLoading, isFetching } = useGetProjectData(id);
  const { applyProject } = useApplyProject({ id, handleModalOpen });
  const userEmail = useAuthStore((state) => state.userData?.email);
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
    setValue,
    trigger,
  } = useForm<ApplySchemeType>({
    resolver: zodResolver(ApplyScheme),
    defaultValues: {
      email: '',
      phone: [],
      wantToSay: '',
      careers: [],
    },
  });

  const stepFields: (keyof ApplySchemeType)[][] = [
    ['email'],
    ['phone'],
    ['wantToSay'],
    ['careers'],
  ];

  const stepList = [
    {
      title: '이메일',
      element: (
        <Input
          control={control}
          errors={errors}
          name='email'
          type='text'
          placeholder='이메일을 입력해주세요.'
        />
      ),
    },
    {
      title: '전화번호',
      element: <PhoneComponent control={control} errors={errors} />,
    },
    {
      title: '팀장에게 전하는 말',
      element: (
        <Input
          control={control}
          errors={errors}
          name='wantToSay'
          type='textarea'
          placeholder='하고 싶은 말을 입력해주세요.'
        />
      ),
    },
    {
      title: '수상/이력 사항',
      element: <CareersComponent control={control} />,
    },
  ];

  useEffect(() => {
    if (userEmail) setValue('email', userEmail);
  }, [userEmail, setValue]);

  const {
    currentStepIndex,
    currentTitle,
    currentStep,
    isLastStep,
    prev,
    next,
    setCurrentStepIndex,
  } = useMultiStepForm(stepList);

  const handleNextStep = async () => {
    const fieldsToValidate = stepFields[currentStepIndex];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      next();
    }
  };

  const handleSubmit = (data: ApplySchemeType) => {
    const formData: joinProject = {
      email: data.email,
      phoneNumber: `${data?.phone?.[0]}-${data?.phone?.[1]}-${data?.phone?.[2]}`,
      message: data.wantToSay,
      career: data.careers,
    };
    applyProject(formData);
  };

  if (!projectData) {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    );
  }

  if (isLoading || isFetching) return <LoadingSpinner />;

  return (
    <S.Container>
      <S.Title>프로젝트 지원</S.Title>
      <S.Subtitle>{projectData.title}</S.Subtitle>
      <S.Dates>{`${formatDate(projectData.recruitmentStartDate)} ~ ${formatDate(
        projectData?.recruitmentEndDate
      )}`}</S.Dates>

      <StepComponent
        steps={stepList}
        currentStepIndex={currentStepIndex}
        setCurrentStepIndex={setCurrentStepIndex}
      />

      <form onSubmit={onSubmitHandler(handleSubmit)}>
        <S.StepWrapper>
          <S.StepLabel>{currentTitle}</S.StepLabel>
        </S.StepWrapper>

        <S.StepContainer>{currentStep}</S.StepContainer>

        <S.StepButton>
          <Button
            size={'small'}
            schema={'primary'}
            radius={'primary'}
            type='button'
            onClick={prev}
          >
            이전
          </Button>
          {currentStepIndex !== stepList.length - 1 && (
            <Button
              size={'small'}
              schema={'primary'}
              radius={'primary'}
              type='button'
              onClick={handleNextStep}
            >
              다음
            </Button>
          )}
        </S.StepButton>

        {isLastStep && (
          <S.SubmitButton
            size='primary'
            schema='primary'
            radius='primary'
            type='submit'
          >
            지원 완료하기
          </S.SubmitButton>
        )}
      </form>

      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default Apply;

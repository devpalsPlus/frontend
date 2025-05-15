import * as S from './ApplyStep.styled';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useParams } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import useGetProjectData from '../../../hooks/user/useGetProjectData';
import useApplyProject from '../../../hooks/user/ProjectHooks/useApplyProject';
import useAuthStore from '../../../store/authStore';
import { ApplySchemeType, joinProject } from '../../../models/joinProject';
import { ApplyScheme } from '../../../constants/user/projectConstants';
import Input from '../../../components/user/projectFormComponents/inputComponent/InputComponent';
import PhoneComponent from '../../../components/user/applyComponents/phoneComponent/PhoneComponent';
import CareersComponent from '../../../components/user/applyComponents/careersComponent/CareersComponent';
import { useEffect } from 'react';
import useMultiStepForm from '../../../hooks/user/ProjectHooks/useMultiStepForm';
import Modal from '../../../components/common/modal/Modal';
import LoadingSpinner from '../../../components/common/loadingSpinner/LoadingSpinner';
import { formatDate } from '../../../util/formatDate';
import StepComponent from '../../../components/user/projectFormComponents/stepComponent/StepComponent';
import Button from '../../../components/common/Button/Button';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';

const Apply = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const navigate = useNavigate();
  const { isOpen, handleModalOpen, handleModalClose, handleConfirm, message } =
    useModal();
  const { data: projectData, isLoading, isFetching } = useGetProjectData(id);
  const { applyProject } = useApplyProject({ id, handleModalOpen });
  const userData = useAuthStore((state) => state.userData);
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

  useEffect(() => {
    if (!userData) {
      return handleModalOpen(MODAL_MESSAGE.isNotLoggedIn, () => navigate(-1));
    }
    if (
      userData?.id === projectData?.user.id ||
      projectData?.acceptedIds.includes(userData?.id) ||
      projectData?.applicantIds.includes(userData?.id)
    ) {
      handleModalOpen(MODAL_MESSAGE.alreadyApply, () => navigate(-1));
    }
  }, [userData, projectData, navigate, handleModalOpen]);

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
    if (userData?.email) setValue('email', userData.email);
  }, [userData, setValue]);

  const {
    currentStepIndex,
    currentTitle,
    currentStep,
    isLastStep,
    prev,
    next,
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
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
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

      <StepComponent steps={stepList} currentStepIndex={currentStepIndex} />

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

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </S.Container>
  );
};

export default Apply;

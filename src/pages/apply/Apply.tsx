import * as S from './Apply.styled';
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
    if (userEmail) setValue('email', userEmail);
  }, [userEmail, setValue]);

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

  if (isLoading) return <LoadingSpinner />;
  if (isFetching) return <LoadingSpinner />;

  return (
    <S.Container>
      <S.Title>프로젝트 지원</S.Title>
      <S.Subtitle>{projectData.title}</S.Subtitle>
      <S.Dates>{`${formatDate(projectData.recruitmentStartDate)} ~ ${formatDate(
        projectData?.recruitmentEndDate
      )}`}</S.Dates>

      <S.Form onSubmit={onSubmitHandler(handleSubmit)}>
        <S.Section>
          <S.Label>이메일</S.Label>
          <Input
            control={control}
            errors={errors}
            name='email'
            type='text'
            placeholder='이메일을 입력해주세요.'
          />
        </S.Section>

        <S.Section>
          <S.Label>휴대폰 전화번호</S.Label>
          <PhoneComponent control={control} errors={errors} />
        </S.Section>

        <S.Section>
          <S.Label>기획자에게 하고 싶은 말</S.Label>
          <Input
            control={control}
            errors={errors}
            name='wantToSay'
            type='textarea'
            placeholder='하고 싶은 말을 입력해주세요.'
          />
        </S.Section>

        <S.Section>
          <S.Label>경력사항 / 수상이력</S.Label>

          <CareersComponent control={control} />
        </S.Section>

        <S.SubmitButton
          size='large'
          schema='primary'
          radius='primary'
          type='submit'
        >
          지원하기
        </S.SubmitButton>
      </S.Form>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default Apply;

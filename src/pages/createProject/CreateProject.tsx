import * as S from './CreateProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/projectFormComponents/inputComponent/InputComponent';
import { CreateProjectFormValues, FormData } from '../../models/createProject';
import ProjectInformationInput from '../../components/projectFormComponents/projectInformationInput/ProjectInformationInput';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';
import useCreateProject from '../../hooks/ProjectHooks/useCreateProject';
import { createProjectScheme } from '../../constants/projectConstants';

const CreateProject = () => {
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
    setValue,
  } = useForm<CreateProjectFormValues>({
    resolver: zodResolver(createProjectScheme),
    defaultValues: {
      startDatePre: '',
      startDate: '',
      endDate: '',
      title: '',
      field: 0,
      position: [],
      newBy: false,
      languages: [],
      markdownEditor: '',
    },
  });

  const { isOpen, message, handleModalClose, handleModalOpen } = useModal();
  const { createProject, isLoading } = useCreateProject({
    handleModalOpen,
  });

  const handleSubmit = (data: z.infer<typeof createProjectScheme>) => {
    const formData: FormData = {
      title: data.title,
      totalMember: data.maxVolunteers,
      recruitmentStartDate: data.startDate,
      recruitmentEndDate: data.endDate,
      startDate: data.startDatePre,
      positionTagIds: data.position,
      estimatedPeriod: `${data.duration}개월`,
      methodTypeId: data.field,
      isBeginner: data.newBy,
      skillTagIds: data.languages,
      description: data.markdownEditor,
    };
    createProject(formData);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.Container>
      <S.Title>프로젝트 생성</S.Title>

      <form onSubmit={onSubmitHandler(handleSubmit)}>
        <S.Section>
          <S.SectionTitle>프로젝트 모집 일정</S.SectionTitle>
          <S.DateContainer>
            <Input
              name='startDate'
              control={control}
              type='date'
              errors={errors}
              placeholder='시작 날짜'
            />
            <S.Separator>-</S.Separator>
            <Input
              name='endDate'
              control={control}
              type='date'
              errors={errors}
              placeholder='종료 날짜'
            />
          </S.DateContainer>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 제목</S.SectionTitle>
          <Input
            control={control}
            errors={errors}
            name='title'
            type='text'
            placeholder='프로젝트 제목을 입력해주세요.'
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 정보</S.SectionTitle>
          <S.SectionInput>
            <ProjectInformationInput
              errors={errors}
              control={control}
              setValue={setValue}
            />
          </S.SectionInput>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 내용</S.SectionTitle>
          <Input
            control={control}
            errors={errors}
            name='markdownEditor'
            placeholder='프로젝트 상세 정보를 입력해주세요.'
          />
        </S.Section>

        <S.SubmitButton type='submit'>제출</S.SubmitButton>
      </form>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
};

export default CreateProject;

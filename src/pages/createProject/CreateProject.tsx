import * as S from './CreateProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/projectFormComponents/inputComponent/InputComponent';
import { CreateProjectFormValues, FormData } from '../../models/createProject';
import ProjectInformationInput from '../../components/projectFormComponents/projectInformationInput/ProjectInformationInput';
import { useState } from 'react';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';
import useAuthStore from '../../store/authStore';
import useCreateProject from '../../hooks/ProjectHooks/useCreateProject';

export const createProjectScheme = z.object({
  startDate: z
    .string({ required_error: '시작 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),
  endDate: z
    .string({ required_error: '종료 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),

  title: z
    .string({ message: '프로젝트 제목을 입력해주세요.' })
    .min(1, { message: '프로젝트 제목을 입력해주세요.' }),

  maxVolunteers: z.coerce
    .number({ message: '모집 인원을 입력해주세요.' })
    .min(1, { message: '모집 인원은 1명 이상이어야 합니다.' })
    .max(1000, { message: '모집 인원은 1000명 이하이어야 합니다.' }),
  startDatePre: z
    .string({ required_error: '종료 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),
  field: z.number({ message: '진행 방식을 선택 해주세요.' }),
  duration: z.coerce
    .number({ message: '예상 기간을 입력해주세요.' })
    .positive({ message: '예상 기간은 1 이상이어야 합니다.' })
    .max(365, { message: '예상 기간은 365일을 초과할 수 없습니다.' }),
  position: z
    .array(z.number({ message: '숫자로 입력 되어야 합니다.' }))
    .min(1, { message: '1개의 분야를 선택해주세요.' }),
  newBy: z.boolean().optional(),
  languages: z
    .array(z.number({ message: '숫자로 입력 되어야 합니다.' }))
    .min(1, { message: '최소 1개 이상의 언어를 선택해주세요.' }),

  markdownEditor: z
    .string({ message: '프로젝트 내용을 입력해주세요.' })
    .min(10, { message: '프로젝트 내용은 최소 10자 이상이어야 합니다.' }),
});

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

  const [isSubmit, setIsSubmit] = useState(false);
  const { isOpen, message, handleModalClose, handleModalOpen } = useModal();
  const { createProject, isLoading } = useCreateProject({
    handleModalOpen,
    setIsSubmit,
  });
  const userId = useAuthStore((state) => state.userData?.id);
  if (!userId) {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    );
  }

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
              isSubmit={isSubmit}
              setIsSubmit={setIsSubmit}
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

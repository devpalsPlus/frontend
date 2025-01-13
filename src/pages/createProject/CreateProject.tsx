import * as S from './CreateProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/inputComponent/inputComponent';
import { CreateProjectFormValues, FormData } from '../../models/createProject';
import { createProject } from '../../api/createProject.api';
import { useNavigate } from 'react-router-dom';
import ProjectInformationInput from '../../components/createProjectComponents/projectInformationInput/ProjectInformationInput';

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
  field: z
    .array(z.number({ message: '숫자로 입력 되어야 합니다.' }))
    .length(1, { message: '1개의 진행 방식을 선택 해주세요.' }),
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
  const navigate = useNavigate();
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
      field: [],
      position: [],
      newBy: false,
      languages: [],
      markdownEditor: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof createProjectScheme>) => {
    const formData: FormData = {
      title: data.title,
      totalMember: data.maxVolunteers,
      recruitmentStartDate: data.startDate,
      recruitmentEndDate: data.endDate,
      startDate: data.startDatePre,
      positionTagId: data.position,
      estimatedPeriod: `${data.duration}개월`,
      methodId: data.field[0],
      isBeginner: data.newBy,
      skillTagId: data.languages,
      description: data.markdownEditor,
    };

    createProject(formData).then((status) => {
      if (status === 201) {
        alert('프로젝트가 성공적으로 생성되었습니다.');
        navigate(`/main`);
      }
    });
  };

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
            type='mdEditor'
            placeholder='프로젝트 상세 정보를 입력해주세요.'
          />
        </S.Section>

        <S.SubmitButton type='submit'>제출</S.SubmitButton>
      </form>
    </S.Container>
  );
};

export default CreateProject;

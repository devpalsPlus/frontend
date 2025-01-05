import React from 'react';
import * as S from './CreateProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/inputComponent';
import { PROJECTDATA } from '../../constants';

const dateRegex = /^\d{4}\.\d{2}\.\d{2}$/;

const createProjectScheme = z.object({
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
    .string({ required_error: '프로젝트 제목을 입력해주세요.' })
    .min(1, { message: '프로젝트 제목을 입력해주세요.' }),

  maxVolunteers: z.coerce
    .number({ required_error: '모집 인원을 입력해주세요.' })
    .min(1, { message: '모집 인원은 1명 이상이어야 합니다.' })
    .max(1000, { message: '모집 인원은 1000명 이하이어야 합니다.' }),

  startDatePre: z
    .string({ required_error: '시작 날짜를 입력해주세요.' })
    .regex(dateRegex, { message: 'YYYY.MM.DD 형식이어야 합니다.' }),

  field: z
    .string({ required_error: '모집 분야를 입력해주세요.' })
    .min(1, { message: '모집 분야를 입력해주세요.' }),

  duration: z.coerce
    .number({ required_error: '예상 기간을 입력해주세요.' })
    .positive({ message: '예상 기간은 1 이상이어야 합니다.' })
    .max(365, { message: '예상 기간은 365일을 초과할 수 없습니다.' }),

  method: z
    .string({ required_error: '진행 방식을 입력해주세요.' })
    .nonempty({ message: '진행 방식을 입력해주세요.' }),

  newBy: z.boolean().optional(),

  description: z
    .string({ required_error: '프로젝트 내용을 입력해주세요.' })
    .min(10, { message: '프로젝트 내용은 최소 10자 이상이어야 합니다.' }),
});

const CreateProject = () => {
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof createProjectScheme>>({
    resolver: zodResolver(createProjectScheme),
    defaultValues: {
      startDatePre: '',
      startDate: '',
      endDate: '',
      title: '',
      maxVolunteers: 0,
      field: '',
      duration: 0,
      method: '',
      newBy: false,
      description: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof createProjectScheme>, e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <S.Container>
      <S.Title>프로젝트 생성</S.Title>

      <form onSubmit={onSubmitHandler(handleSubmit)}>
        <S.Section>
          <S.SectionTitle>프로젝트 모집 일정</S.SectionTitle>
          <S.DateContainer>
            <Input
              name="startDate"
              control={control}
              type="date"
              errors={errors}
              placeholder="시작 날짜"
            />
            <S.Separator>-</S.Separator>
            <Input
              name="endDate"
              control={control}
              type="date"
              errors={errors}
              placeholder="종료 날짜"
            />
          </S.DateContainer>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 제목</S.SectionTitle>
          <Input
            control={control}
            errors={errors}
            name="title"
            type="text"
            placeholder="프로젝트 제목을 입력해주세요."
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 정보</S.SectionTitle>
          <S.SectionInput>
            {PROJECTDATA.map((input, index) => (
              <>
                <S.InfoRow key={index}>
                  <label htmlFor={input.name}>{input.label}</label>
                  <Input
                    index={input.id}
                    control={control}
                    errors={errors}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </S.InfoRow>
              </>
            ))}

            <S.InfoRow>
              <label htmlFor="languages">사용 언어</label>
            </S.InfoRow>
          </S.SectionInput>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 내용</S.SectionTitle>
          <Input
            control={control}
            errors={errors}
            name="description"
            type="mdEditor"
            placeholder="프로젝트 상세 정보를 입력해주세요."
          />
        </S.Section>

        <S.SubmitButton type="submit">제출</S.SubmitButton>
      </form>
    </S.Container>
  );
};

export default CreateProject;

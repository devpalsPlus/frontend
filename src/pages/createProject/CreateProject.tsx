import React from 'react';
import * as S from './CreateProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/common/inputComponent';
import { PROJECTDATA } from '../../constants';

const createProjectScheme = z.object({
  startDate: z.date({ message: '입력해주세요' }),
  endDate: z.date({ message: '입력해주세요' }),

  title: z.string({ message: '입력해주세요' }),

  maxVolunteers: z.number({ message: '숫자로 입력해주세요.' }),
  startDatePre: z.string({ message: '입력해주세요' }),
  field: z.string({ message: '입력해주세요' }),
  duration: z.number({ message: '입력해주세요' }),
  method: z.string({ message: '입력해주세요' }),
  newBy: z.string({ message: '입력해주세요' }),

  description: z.string({ message: '입력해주세요' }),
});

const CreateProject = () => {
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof createProjectScheme>>({
    resolver: zodResolver(createProjectScheme),
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
            type="textarea"
            placeholder="프로젝트 상세 정보를 입력해주세요."
          />
        </S.Section>

        <S.SubmitButton type="submit">제출</S.SubmitButton>
      </form>
    </S.Container>
  );
};

export default CreateProject;

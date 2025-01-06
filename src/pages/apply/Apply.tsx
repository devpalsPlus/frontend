import React, { useState } from 'react';
import * as S from './Apply.styled';
import Input from '../../components/createProjectComponents/inputComponent';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CareerInputList } from '../../components/createProjectComponents/inputComponent2';

const ApplyScheme = z.object({
  email: z.string(),
  phoneFirst: z.string(),
  phoneMiddle: z.string(),
  phoneLast: z.string(),
  phone: z.array(
    z.object({
      first: z.string(),
      middle: z.string(),
      last: z.string(),
    })
  ),
  wantToSay: z.string(),
  careers: z
    .array(
      z.object({
        companyName: z.string(),
        periodStart: z.string(),
        periodEnd: z.string(),
        role: z.string(),
      })
    )
    .optional(),
});

const Apply = () => {
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
    register,
  } = useForm<z.infer<typeof ApplyScheme>>({
    resolver: zodResolver(ApplyScheme),
    defaultValues: {
      email: '',
      phoneFirst: '',
      phoneMiddle: '',
      phoneLast: '',
      phone: [],
      wantToSay: '',
      careers: [],
    },
  });
  const { fields: fieldsCareers, append: appendCareers } = useFieldArray({
    name: 'careers',
    control,
  });

  const { fields: fieldsPhone, append: appendPhone } = useFieldArray({
    name: 'phone',
    control,
  });

  const handleSubmit = (data: z.infer<typeof ApplyScheme>) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.Title>프로젝트 지원</S.Title>
      <S.Subtitle>클론코딩 사이드프로젝트 팀원 모집</S.Subtitle>
      <S.Dates>2024.12.29 - 2025.01.10</S.Dates>

      <S.Form onSubmit={onSubmitHandler(handleSubmit)}>
        <S.Section>
          <S.Label>이메일</S.Label>
          <Input
            control={control}
            errors={errors}
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
          />
        </S.Section>

        <S.Section>
          <S.Label>전화번호</S.Label>
          <S.PhoneInputContainer>
            <S.PhoneInputFirst type="text" maxLength={3} />
            <S.Dash>-</S.Dash>
            <S.PhoneInput type="text" maxLength={4} />
            <S.Dash>-</S.Dash>
            <S.PhoneInput type="text" maxLength={4} />
          </S.PhoneInputContainer>
        </S.Section>

        <S.Section>
          <S.Label>기획자에게 하고 싶은 말</S.Label>
          <S.TextArea placeholder="하고 싶은 말을 입력해주세요." />
        </S.Section>

        <S.Section>
          <S.Label>경력사항 / 수상이력</S.Label>
          {fieldsCareers.map((field, index) => (
            <S.CareerContainer key={field.id}>
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder="회사명 / 활동명"
                name="companyName"
              />
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder="시작 기간"
                name="periodStart"
                type="date"
              />
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder="종료 기간"
                name="periodEnd"
                type="date"
              />
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder="역할 / 기여도"
                name="role"
              />
            </S.CareerContainer>
          ))}
          <p
            onClick={() =>
              appendCareers({
                companyName: '',
                periodStart: '',
                periodEnd: '',
                role: '',
              })
            }
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            추가
          </p>
        </S.Section>

        <S.SubmitButton type="submit">제출</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default Apply;

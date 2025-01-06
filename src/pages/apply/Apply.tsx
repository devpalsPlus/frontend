import React from 'react';
import * as S from './Apply.styled';
import Input from '../../components/createProjectComponents/inputComponent';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const ApplyScheme = z.object({
  email: z.string(),
  phoneFirst: z.string(),
  phoneMiddle: z.string(),
  phoneLast: z.string(),
  wantToSay: z.string(),
  introduce: z.string(),
});

const Apply = () => {
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof ApplyScheme>>({
    resolver: zodResolver(ApplyScheme),
    defaultValues: {
      email: '',
      phoneFirst: '',
      phoneMiddle: '',
      phoneLast: '',
      wantToSay: '',
      introduce: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof ApplyScheme>) => {
    console.log(data);
  };

  const handleClick = () => {};

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
          <S.CareerContainer>
            <S.CareerInput type="text" placeholder="회사명 / 활동명" />
            <S.CareerInput
              type="date"
              placeholder="기간 (예: 2023.01 ~ 2023.12)"
            />
            <S.CareerInput type="text" placeholder="역할 / 기여도" />
          </S.CareerContainer>
          <p onClick={handleClick}>추가</p>
        </S.Section>

        <S.SubmitButton type="submit">제출</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default Apply;

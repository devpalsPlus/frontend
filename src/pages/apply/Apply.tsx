import * as S from './Apply.styled';
import Input from '../../components/createProjectComponents/inputComponent';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  CareerInputList,
  PhoneInputList,
} from '../../components/createProjectComponents/inputComponent2';
import useJoinProject from '../../hooks/useJoinProject';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../util/format';
import { applicantProject } from '../../api/joinProject.api';
import { joinProject } from '../../models/joinProject';

const ApplyScheme = z.object({
  email: z.string().email({ message: '이메일 형식으로 입력해주세요.' }),
  phone: z.string().array().optional(),
  wantToSay: z.string().optional(),
  careers: z
    .array(
      z.object({
        name: z.string(),
        periodStart: z.string(),
        periodEnd: z.string(),
        role: z.string(),
      })
    )
    .optional(),
});

export type ApplySchemeType = z.infer<typeof ApplyScheme>;

const Apply = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const { data, isLoading, isFetching } = useJoinProject(id);
  const {
    handleSubmit: onSubmitHandler,
    formState: { errors },
    control,
  } = useForm<ApplySchemeType>({
    resolver: zodResolver(ApplyScheme),
    defaultValues: {
      email: '',
      phone: [],
      wantToSay: '',
      careers: [],
    },
  });

  const { fields: fieldsCareers, append: appendCareers } = useFieldArray({
    name: 'careers',
    control,
  });

  const handleSubmit = (data: ApplySchemeType) => {
    const formData: joinProject = {
      email: data.email,
      phoneNumber: `${data?.phone?.[0]}-${data?.phone?.[1]}-${data?.phone?.[2]}`,
      message: data.wantToSay,
      career: data.careers,
    };

    applicantProject(formData, id).then((status) => {
      switch (status) {
        case 201:
          alert('지원서가 성공적으로 제출되었습니다.');
          break;
        case 400:
          alert('잘못된 요청입니다.');
          break;
        case 401:
          alert('세션이 만료되었습니다. 로그인 해주세요.');
          break;
        case 404:
          alert('해당 페이지가 존재하지 않습니다');
          break;
        case 500:
          alert('서버 오류.');
          break;
        default:
          alert('알 수 없는 에러.');
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isFetching) return <div>isFetching...</div>;

  return (
    <S.Container>
      <S.Title>프로젝트 지원</S.Title>
      <S.Subtitle>{data?.title}</S.Subtitle>
      <S.Dates>{`${formatDate(data?.recruitmentStartDate)} ~ ${formatDate(
        data?.recruitmentEndDate
      )}`}</S.Dates>

      <S.Form onSubmit={onSubmitHandler(handleSubmit)}>
        <S.Section>
          <S.Label>이메일</S.Label>
          <Input
            control={control}
            errors={errors}
            name='email'
            type='email'
            placeholder='이메일을 입력해주세요.'
          />
        </S.Section>

        <S.Section>
          <S.Label>전화번호</S.Label>
          <S.PhoneInputContainer>
            <PhoneInputList
              control={control}
              name='phone.0'
              maxLength={3}
              placeholder='010'
            />
            <S.Dash>-</S.Dash>
            <PhoneInputList
              control={control}
              name='phone.1'
              maxLength={4}
              placeholder='1234'
            />
            <S.Dash>-</S.Dash>
            <PhoneInputList
              control={control}
              name='phone.2'
              maxLength={4}
              placeholder='5678'
            />

            {errors.phone && (
              <S.FormError>{String(errors?.phone?.root?.message)}</S.FormError>
            )}
          </S.PhoneInputContainer>
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
          {fieldsCareers.map((field, index) => (
            <S.CareerContainer key={field.id}>
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder='회사명 / 활동명'
                name='companyName'
              />
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder='시작 기간'
                name='periodStart'
                type='date'
              />
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder='종료 기간'
                name='periodEnd'
                type='date'
              />
              <CareerInputList
                control={control}
                index={index}
                field={field}
                placeholder='역할 / 기여도'
                name='role'
              />
            </S.CareerContainer>
          ))}
          <p
            onClick={() =>
              appendCareers({
                name: '',
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

        <S.SubmitButton type='submit'>제출</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default Apply;

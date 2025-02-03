import * as S from './Apply.styled';
import Input from '../../components/projectFormComponents/inputComponent/inputComponent';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../util/format';
import { joinProject } from '../../models/joinProject';
import useGetProjectData from '../../hooks/useJoinProject';
import CareersComponent from '../../components/applyComponents/careersComponent/CareersComponent';
import PhoneComponent from '../../components/applyComponents/phoneComponent/PhoneComponent';
import LoadingSpinner from '../../components/common/loadingSpinner/LoadingSpinner';
import Modal from '../../components/common/modal/Modal';
import { useModal } from '../../hooks/useModal';
import useApplyProject from '../../hooks/useApplyProject';

const ApplyScheme = z.object({
  email: z
    .string()
    .nonempty({ message: '이메일을 입력해주세요.' })
    .email({ message: '이메일 형식으로 입력해주세요.' }),
  phone: z
    .string({ message: '전화번호를 입력해주세요.' })
    .array()
    .nonempty({ message: '전화번호를 입력해주세요.' }),
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
  const { isOpen, handleModalOpen, handleModalClose, message } = useModal();
  const { data: projectData, isLoading, isFetching } = useGetProjectData(id);
  const { applyProject } = useApplyProject({ id, handleModalOpen });
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

    applyProject(formData);
  };

  if (!projectData) {
    return <div>데이터가 없습니다.</div>;
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

          <CareersComponent
            fieldsCareers={fieldsCareers}
            appendCareers={appendCareers}
            control={control}
          />
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

import * as S from './ModifyProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/useModal';
import useGetProjectData from '../../../hooks/user/useGetProjectData';
import useUpdateProject from '../../../hooks/user/ProjectHooks/useUpdateProject';
import {
  CreateProjectFormValues,
  FormData,
} from '../../../models/createProject';
import { createProjectScheme } from '../../../constants/user/projectConstants';
import { formatDate } from '../../../util/formatDate';
import Modal from '../../../components/common/modal/Modal';
import Input from '../../../components/user/projectFormComponents/inputComponent/InputComponent';
import ProjectInformationInput from '../../../components/user/projectFormComponents/projectInformationInput/ProjectInformationInput';

const ModifyProject = () => {
  const { projectId } = useParams();
  const id = Number(projectId);
  const { isOpen, handleModalOpen, handleModalClose, message } = useModal();

  const { data: projectData } = useGetProjectData(id);
  const { updateProject } = useUpdateProject({
    id,
    handleModalOpen,
  });
  const userId = projectData?.user.id;

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

  useEffect(() => {
    if (projectData) {
      setValue('startDatePre', formatDate(projectData.startDate));
      setValue('startDate', formatDate(projectData.recruitmentStartDate));
      setValue('endDate', formatDate(projectData.recruitmentEndDate));
      setValue('title', projectData.title);
      setValue('newBy', projectData.isBeginner);
      setValue('maxVolunteers', projectData.totalMember);
      setValue('duration', Number(projectData.estimatedPeriod.slice(0, 1)));
      setValue('markdownEditor', projectData.description);
    }
  }, [projectData, setValue]);

  if (!userId) {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    );
  }

  const handleSubmit = async (data: z.infer<typeof createProjectScheme>) => {
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
      isDone: projectData.isDone,
    };

    updateProject(formData);
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
              apiData={projectData}
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

export default ModifyProject;

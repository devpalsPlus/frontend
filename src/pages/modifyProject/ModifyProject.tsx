import * as S from './ModifyProject.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/projectFormComponents/inputComponent/inputComponent';
import { CreateProjectFormValues, FormData } from '../../models/createProject';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectInformationInput from '../../components/projectFormComponents/projectInformationInput/ProjectInformationInput';
import { createProjectScheme } from '../createProject/CreateProject';
import useGetProjectData from '../../hooks/useJoinProject';
import { useEffect } from 'react';
import { formatDate } from '../../util/format';
import useUpdateProject from '../../hooks/useUpdateProject';
import { useAlert } from '../../hooks/useAlert';

const ModifyProject = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const id = Number(projectId);
  const { showAlert } = useAlert();

  const { data: projectData } = useGetProjectData(id);
  const { updateProject } = useUpdateProject({
    id,
    onSuccess: () => {
      showAlert('수정 되었습니다.');
      navigate(`/project-detail/${id}`);
    },
    onError: (error) => {
      console.error('Error updating project:', error);
    },
  });

  console.log(projectData);

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

  const handleSubmit = async (data: z.infer<typeof createProjectScheme>) => {
    const formData: FormData = {
      title: data.title,
      totalMember: data.maxVolunteers,
      recruitmentStartDate: data.startDate,
      recruitmentEndDate: data.endDate,
      startDate: data.startDatePre,
      positionTagId: data.position,
      estimatedPeriod: `${data.duration}개월`,
      methodId: data.field,
      isBeginner: data.newBy,
      skillTagId: data.languages,
      description: data.markdownEditor,
    };

    try {
      await updateProject(formData);
    } catch (e) {
      console.error(e);
    }
  };

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
  }, [projectData]);

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
    </S.Container>
  );
};

export default ModifyProject;

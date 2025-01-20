import { z } from 'zod';
import * as S from './myProfile.styled';
import { ERROR_MESSAGES } from '../../../constants/authConstants';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Title from '../../common/title/Title';
import { useEffect, useState } from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import useNickNameVerification from '../../../hooks/useNicknameVerification';
import InputText from '../../auth/InputText';
import Button from '../../common/Button/Button';
import {
  useEditMyProfileInfo,
  useMyProfileInfo,
} from '../../../hooks/useMyProfileInfo';
import {
  PencilIcon,
  XMarkIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { ROUTES } from '../../../constants/routes';
import { Link } from 'react-router-dom';
import BeginnerIcon from '../../../assets/beginner.svg';
import OptionBox from './optionBox';
import TextareaAutosize from 'react-textarea-autosize';

const profileSchema = z.object({
  nickname: z
    .string()
    .nonempty(ERROR_MESSAGES.NICKNAME_REQUIRED)
    .max(6, ERROR_MESSAGES.NICKNAME_LENGTH)
    .regex(
      /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9~`!@#$%^&*()\-_=+]{1,6}$/,
      ERROR_MESSAGES.NICKNAME_FORMAT
    ),
  skillTagIds: z.array(z.number()).min(1, ERROR_MESSAGES.SKILL_REQUIRED),
  positionTagId: z.number().refine((id) => id > 0, {
    message: ERROR_MESSAGES.POSITION_REQUIRED,
  }),
  github: z
    .string()
    .optional()
    .optional()
    .refine(
      (val) => !val || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(val),
      ERROR_MESSAGES.GITHUB_SPECIAL
    )
    .transform((val) => (val === '' ? '' : val || '')),
  career: z
    .array(
      z
        .object({
          name: z.string().nonempty(ERROR_MESSAGES.CAREERNAME_REQUIRED),
          periodStart: z.string().nonempty(ERROR_MESSAGES.STARTPERIOD_REQUIRED),
          periodEnd: z.string().nonempty(ERROR_MESSAGES.ENDPERIOD_REQUIRED),
          role: z.string().nonempty(ERROR_MESSAGES.ROLE_REQUIRED),
        })
        .refine(
          (data) => new Date(data.periodStart) <= new Date(data.periodEnd),
          {
            message: ERROR_MESSAGES.ENDPERIOD_SPECIAL,
            path: ['periodEnd'],
          }
        )
    )
    .optional(),
  bio: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { skillTagsData, positionTagsData } = useSearchFilteringSkillTag();
  const { nicknameMessage, handleNickNameChange, handleNickname } =
    useNickNameVerification();

  const { myData, isLoading } = useMyProfileInfo();
  const { editMyProfile } = useEditMyProfileInfo();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: '',
      skillTagIds: [],
      positionTagId: 0,
      github: '',
      career: [],
      bio: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (myData) {
      const skillTagIds = myData.skills
        .map(
          (skill) =>
            skillTagsData.find((tag) => tag.name === skill.skillName)?.id
        )
        .filter((id): id is number => id !== undefined);

      reset({
        nickname: myData.nickname,
        bio: myData.bio || '',
        positionTagId: myData.positionTag?.id || 0,
        github: myData.github || '',
        skillTagIds: skillTagIds,
        career: myData.career?.length
          ? myData.career.map((item) => ({
              name: item.name,
              periodStart: item.periodStart.split('T')[0],
              periodEnd: item.periodEnd.split('T')[0],
              role: item.role,
            }))
          : [{ name: '', periodStart: '', periodEnd: '', role: '' }],
      });
    }
  }, [myData, skillTagsData, reset]);

  const { fields, append, remove } = useFieldArray({ control, name: 'career' });

  const handleCheckNickName = (nickname: string) => {
    if (nickname !== myData?.nickname) {
      handleNickname(nickname);
    }
  };

  const onSubmit = (data: ProfileFormData, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();

    editMyProfile(data);
    setIsEditing(false);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (!myData) {
    return <div>유저 정보를 불러 올 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <Title size='semiLarge'>나의 정보</Title>
      {!isEditing ? (
        <S.ProfileSection>
          <S.Wrapper>
            <label>닉네임</label>
            <span>{myData.nickname}</span>
            <S.IconWrapper>
              {myData.userLevel === 'Beginner' ? (
                <img src={BeginnerIcon} alt='beginner' width='16' height='16' />
              ) : (
                ''
              )}
            </S.IconWrapper>
          </S.Wrapper>
          <S.Wrapper>
            <label>스킬셋</label>
            <ul>
              {myData.skills.map((skill) => (
                <li key={skill.skillName}>
                  <img
                    src={skill.skillImg}
                    alt={skill.skillName}
                    width='40'
                    height='40'
                  />
                  <span>{skill.skillName}</span>
                </li>
              ))}
            </ul>
          </S.Wrapper>
          <S.Wrapper>
            <label>포지션</label>
            <span>{myData.positionTag?.name}</span>
          </S.Wrapper>
          <S.Wrapper>
            <label>깃허브</label>
            <span>{myData.github}</span>
          </S.Wrapper>
          <S.List>
            <label>경&nbsp;&nbsp;&nbsp;력</label>
            <ul>
              {myData.career?.map((career) => (
                <li key={career.name}>
                  <span>{career.name}</span> ({career.periodStart.slice(0, 10)}{' '}
                  ~ {career.periodEnd.slice(0, 10)}{' '}
                  <span> - {career.role}</span>)
                </li>
              ))}
            </ul>
          </S.List>
          <S.List>
            <label>소&nbsp;&nbsp;&nbsp;개</label>
            <S.Bio>{myData.bio}</S.Bio>
          </S.List>
          <Link to={ROUTES.changePw}>비밀번호 재설정</Link>
          <button onClick={() => setIsEditing(true)}>
            <PencilIcon />
          </button>
        </S.ProfileSection>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 닉네임 */}
          <S.EditWrapper>
            <label>닉네임</label>
            <Controller
              name='nickname'
              control={control}
              render={({ field }) => (
                <S.InputWrapper>
                  <S.InputTextNickname>
                    <InputText
                      inputType='text'
                      placeholder='닉네임'
                      autoComplete='off'
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(e);
                        handleNickNameChange(value);
                      }}
                    />
                  </S.InputTextNickname>
                  {errors.nickname && (
                    <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
                  )}
                  {!errors.nickname && nicknameMessage && (
                    <S.ErrorMessage>{nicknameMessage}</S.ErrorMessage>
                  )}
                  <Button
                    size='primary'
                    schema='primary'
                    radius='large'
                    type='button'
                    onClick={() => {
                      handleCheckNickName(field.value);
                    }}
                  >
                    중복확인
                  </Button>
                </S.InputWrapper>
              )}
            />
          </S.EditWrapper>

          {/* 스킬셋 */}
          <S.EditContainer>
            <label>스킬셋</label>
            <Controller
              name='skillTagIds'
              control={control}
              render={({ field }) => (
                <S.EditList>
                  {skillTagsData.map((skill) => (
                    <OptionBox
                      key={skill.id}
                      id={skill.id}
                      label={skill.name}
                      type='checkbox'
                      isSelected={field.value.includes(skill.id)}
                      onChange={(id, isChecked) => {
                        if (isChecked) {
                          field.onChange([...field.value, id]);
                        } else {
                          field.onChange(
                            field.value.filter((value) => value !== id)
                          );
                        }
                      }}
                      imgSrc={skill.img}
                    />
                  ))}
                  {errors.skillTagIds && (
                    <S.ErrorMessage>
                      {errors.skillTagIds.message}
                    </S.ErrorMessage>
                  )}
                </S.EditList>
              )}
            />
          </S.EditContainer>

          {/* 포지션 */}
          <S.EditContainer>
            <label>포지션</label>
            <Controller
              name='positionTagId'
              control={control}
              render={({ field }) => (
                <S.EditList>
                  {positionTagsData
                    .filter((position) => position.name !== '전체')
                    .map((position) => (
                      <OptionBox
                        key={position.id}
                        id={position.id}
                        label={position.name}
                        type='radio'
                        isSelected={field.value === position.id}
                        onChange={(id) => field.onChange(id)}
                      />
                    ))}
                  {errors.positionTagId && (
                    <S.ErrorMessage>
                      {errors.positionTagId.message}
                    </S.ErrorMessage>
                  )}
                </S.EditList>
              )}
            />
          </S.EditContainer>

          {/* 깃허브 */}
          <S.EditWrapper>
            <label>깃허브</label>
            <Controller
              name='github'
              control={control}
              render={({ field }) => (
                <S.InputWrapper>
                  <S.InputTextGithub>
                    <InputText
                      inputType='text'
                      placeholder='깃허브 주소를 입력해주세요.'
                      autoComplete='off'
                      {...field}
                    />
                  </S.InputTextGithub>
                  {errors.github && (
                    <S.ErrorMessage>{errors.github.message}</S.ErrorMessage>
                  )}
                </S.InputWrapper>
              )}
            />
          </S.EditWrapper>

          {/* 경력 */}
          <S.EditContainer>
            <label>경&nbsp;&nbsp;&nbsp;력</label>
            <S.EditList>
              {fields.map((field, index) => (
                <S.CareerList key={field.id}>
                  <Controller
                    name={`career.${index}.name`}
                    control={control}
                    render={({ field }) => (
                      <S.CareerWrapper>
                        <S.InputTextCareer>
                          <InputText
                            inputType='text'
                            placeholder='회사 이름'
                            autoComplete='off'
                            {...field}
                          />
                        </S.InputTextCareer>
                        {errors.career?.[index]?.name && (
                          <S.ErrorCareerMessage>
                            {errors.career[index]?.name?.message}
                          </S.ErrorCareerMessage>
                        )}
                      </S.CareerWrapper>
                    )}
                  />
                  <Controller
                    name={`career.${index}.periodStart`}
                    control={control}
                    render={({ field }) => (
                      <S.CareerWrapper>
                        <S.InputTextCareer>
                          <InputText
                            inputType='date'
                            placeholder='시작 날짜'
                            autoComplete='off'
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </S.InputTextCareer>
                        {errors.career?.[index]?.periodStart && (
                          <S.ErrorCareerMessage>
                            {errors.career[index]?.periodStart?.message}
                          </S.ErrorCareerMessage>
                        )}
                      </S.CareerWrapper>
                    )}
                  />
                  <Controller
                    name={`career.${index}.periodEnd`}
                    control={control}
                    render={({ field }) => (
                      <S.CareerWrapper>
                        <S.InputTextCareer>
                          <InputText
                            inputType='date'
                            placeholder='종료 날짜'
                            autoComplete='off'
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </S.InputTextCareer>
                        {errors.career?.[index]?.periodEnd && (
                          <S.ErrorCareerMessage>
                            {errors.career[index]?.periodEnd?.message}
                          </S.ErrorCareerMessage>
                        )}
                      </S.CareerWrapper>
                    )}
                  />
                  <Controller
                    name={`career.${index}.role`}
                    control={control}
                    render={({ field }) => (
                      <S.CareerWrapper>
                        <S.CareerWrapper>
                          <S.InputTextCareer>
                            <InputText
                              inputType='text'
                              placeholder='역할'
                              autoComplete='off'
                              {...field}
                            />
                          </S.InputTextCareer>
                        </S.CareerWrapper>
                        {errors.career?.[index]?.role && (
                          <S.ErrorCareerMessage>
                            {errors.career[index]?.role?.message}
                          </S.ErrorCareerMessage>
                        )}
                      </S.CareerWrapper>
                    )}
                  />
                  <button onClick={() => remove(index)}>
                    <XMarkIcon width='16' height='16' />
                  </button>
                </S.CareerList>
              ))}
            </S.EditList>
            <button
              type='button'
              onClick={() =>
                append({ name: '', periodStart: '', periodEnd: '', role: '' })
              }
            >
              <SquaresPlusIcon width='20' height='20' />
            </button>
            {errors.career && (
              <S.ErrorMessage>{errors.career.message}</S.ErrorMessage>
            )}
          </S.EditContainer>

          {/* 소개 */}
          <S.EditContainer>
            <label>소&nbsp;&nbsp;&nbsp;개</label>
            <S.EditList>
              <Controller
                name='bio'
                control={control}
                render={({ field }) => (
                  <TextareaAutosize
                    {...field}
                    placeholder='자신의 소개를 입력해주세요. 최대 10줄 입력 가능합니다.'
                    minRows={3}
                    maxRows={10}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      fontSize: '0.9em',
                      resize: 'none',
                    }}
                  />
                )}
              />
              {errors.bio && (
                <S.ErrorMessage>{errors.bio.message}</S.ErrorMessage>
              )}
            </S.EditList>
          </S.EditContainer>
          <S.Wrapper>
            <Button
              size='primary'
              schema='primary'
              radius='large'
              type='submit'
            >
              확인
            </Button>
            <Button
              size='primary'
              schema='primary'
              radius='large'
              type='button'
              onClick={() => setIsEditing(false)}
            >
              취소
            </Button>
          </S.Wrapper>
        </form>
      )}
    </S.Container>
  );
};

export default MyProfile;

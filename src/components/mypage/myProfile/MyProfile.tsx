import { z } from 'zod';
import * as S from './MyProfile.styled';
import { ERROR_MESSAGES } from '../../../constants/authConstants';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import useNickNameVerification from '../../../hooks/useNicknameVerification';
import InputText from '../../auth/InputText';
import Button from '../../common/Button/Button';
import {
  useEditMyProfileInfo,
  useMyProfileInfo,
} from '../../../hooks/useMyInfo';
import {
  PencilIcon,
  XMarkIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { ROUTES } from '../../../constants/routes';
import { Link } from 'react-router-dom';
import BeginnerIcon from '../../../assets/beginner.svg';
import OptionBox from './OptionBox';
import TextareaAutosize from 'react-textarea-autosize';
import Modal from '../../common/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import Spinner from '../Spinner';
import NoMyInfo from './NoMyInfo';

const profileSchema = z.object({
  nickname: z
    .string()
    .nonempty(ERROR_MESSAGES.NICKNAME_REQUIRED)
    .max(6, ERROR_MESSAGES.NICKNAME_LENGTH)
    .regex(
      /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9~`!@#$%^&*()\-_=+]{1,6}$/,
      ERROR_MESSAGES.NICKNAME_FORMAT
    ),
  beginner: z.boolean(),
  skillTagIds: z.array(z.number()).min(1, ERROR_MESSAGES.SKILL_REQUIRED),
  positionTagIds: z.array(z.number()).min(1, ERROR_MESSAGES.POSITION_REQUIRED),
  github: z
    .string()
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
  const [nickname, setNickname] = useState('');
  const { skillTagsData, positionTagsData } = useSearchFilteringSkillTag();
  const { nicknameMessage, handleDuplicationNickname } =
    useNickNameVerification();

  const { myData, isLoading } = useMyProfileInfo();
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { editMyProfile } = useEditMyProfileInfo(handleModalOpen);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: '',
      beginner: false,
      skillTagIds: [],
      positionTagIds: [],
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
          (skill) => skillTagsData.find((tag) => tag.name === skill.name)?.id
        )
        .filter((id): id is number => id !== undefined);

      const positionTagIds = myData.positions
        .map(
          (position) =>
            positionTagsData.find((tag) => tag.id === position.id)?.id
        )
        .filter((id): id is number => id !== undefined);

      reset({
        nickname: myData.nickname,
        bio: myData.bio || '',
        beginner: myData.beginner,
        positionTagIds,
        github: myData.github || '',
        skillTagIds,
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
  }, [myData, skillTagsData, positionTagsData, reset]);

  const { fields, append, remove } = useFieldArray({ control, name: 'career' });

  const onSubmit = (data: ProfileFormData, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();

    editMyProfile(data);
    setIsEditing(false);
  };

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  if (!myData) {
    return <NoMyInfo />;
  }

  return (
    <S.Box>
      <S.FilterWrapper>
        <S.FilterTitle>프로필</S.FilterTitle>
      </S.FilterWrapper>
      <S.ScrollWrapper>
        <S.Container>
          {!isEditing ? (
            <S.ProfileSection>
              <S.Wrapper>
                <label>닉네임</label>
                <S.NicknameBackgroundBox>
                  <S.NicknameSpan>{myData.nickname}</S.NicknameSpan>
                  {Boolean(myData.beginner) && (
                    <S.IconWrapper>
                      <img
                        src={BeginnerIcon}
                        alt='beginner'
                        width='20'
                        height='20'
                      />
                    </S.IconWrapper>
                  )}
                </S.NicknameBackgroundBox>
              </S.Wrapper>
              <S.Wrapper>
                <label>스킬셋</label>
                <S.BackgroundBox>
                  <ul>
                    {myData.skills.map((skill) => (
                      <li key={skill.name}>
                        <img
                          src={skill.img}
                          alt={skill.name}
                          width='40'
                          height='40'
                        />
                        <span>{skill.name}</span>
                      </li>
                    )) || '스킬을 선택해주세요.'}
                  </ul>
                </S.BackgroundBox>
              </S.Wrapper>
              <S.Wrapper>
                <label>포지션</label>
                <S.BackgroundWrapper>
                  <div>
                    {myData.positions
                      .sort()
                      .map((position) => <span>{position.name}</span>) ||
                      '포지션을 선택해주세요.'}
                  </div>
                </S.BackgroundWrapper>
              </S.Wrapper>
              <S.Wrapper>
                <label>깃허브</label>
                <S.BackgroundWrapper>
                  <span>{myData.github || '깃허브 링크를 올려보세요.'}</span>
                </S.BackgroundWrapper>
              </S.Wrapper>
              <S.List>
                <label>경&nbsp;&nbsp;&nbsp;력</label>
                <S.BackgroundBox>
                  <ul>
                    {myData && !!myData.career?.length ? (
                      myData.career?.map((career) => (
                        <li key={`-${career.name}`}>
                          <span>{career.name}</span> (
                          {career.periodStart.slice(0, 10)} ~{' '}
                          {career.periodEnd.slice(0, 10)}{' '}
                          <span> - {career.role}</span>)
                        </li>
                      ))
                    ) : (
                      <li>경력을 기록하세요.</li>
                    )}
                  </ul>
                </S.BackgroundBox>
              </S.List>
              <S.List>
                <label>소&nbsp;&nbsp;&nbsp;개</label>
                <S.BackgroundBox>
                  <S.Bio>{myData.bio || '내 소개를 적어주세요.'}</S.Bio>
                </S.BackgroundBox>
              </S.List>
              <Link to={ROUTES.changePw}>비밀번호 재설정</Link>
              <button onClick={() => setIsEditing(true)}>
                <PencilIcon />
              </button>
            </S.ProfileSection>
          ) : (
            <S.Form onSubmit={handleSubmit(onSubmit)}>
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
                          autoComplete='auto'
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(e);
                            setNickname(value);
                          }}
                        />
                      </S.InputTextNickname>
                      {errors.nickname && (
                        <S.ErrorMessage>
                          {errors.nickname.message}
                        </S.ErrorMessage>
                      )}
                      {!errors.nickname && (
                        <S.ErrorMessage>{nicknameMessage}</S.ErrorMessage>
                      )}
                      <Button
                        size='primary'
                        schema='primary'
                        radius='large'
                        type='button'
                        onClick={() => {
                          handleDuplicationNickname(nickname);
                        }}
                      >
                        중복확인
                      </Button>
                    </S.InputWrapper>
                  )}
                />
              </S.EditWrapper>
              <S.EditWrapper>
                <label>새싹여부</label>
                <Controller
                  name='beginner'
                  control={control}
                  render={({ field }) => (
                    <S.InputBeginner
                      type='checkbox'
                      checked={field.value}
                      name=''
                      id=''
                      onChange={(e) => {
                        const checked = e.target.checked;
                        field.onChange(checked);
                      }}
                    />
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
                      {skillTagsData
                        .filter((skill) => skill.id !== 0)
                        .map((skill) => (
                          <OptionBox
                            key={skill.id}
                            id={skill.id}
                            label={skill.name}
                            type='checkbox'
                            isSelected={field.value.includes(skill.id)}
                            onChange={(id, isChecked) => {
                              if (isChecked) {
                                field.onChange([...field.value, id].sort());
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
                  name='positionTagIds'
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
                            type='checkbox'
                            isSelected={field.value.includes(position.id)}
                            onChange={(id, isChecked) => {
                              if (isChecked) {
                                field.onChange([...field.value, id].sort());
                              } else {
                                field.onChange(
                                  field.value.filter((value) => value !== id)
                                );
                              }
                            }}
                          />
                        ))}
                      {errors.positionTagIds && (
                        <S.ErrorMessage>
                          {errors.positionTagIds.message}
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
                          autoComplete='auto'
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
                                autoComplete='auto'
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
                                autoComplete='auto'
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
                                autoComplete='auto'
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
                                  autoComplete='auto'
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
                      <S.CareerWrapper>
                        <S.XMarkButton onClick={() => remove(index)}>
                          <XMarkIcon width='16' height='16' />
                        </S.XMarkButton>
                      </S.CareerWrapper>
                    </S.CareerList>
                  ))}
                </S.EditList>
                <S.CareerAddButton
                  type='button'
                  onClick={() =>
                    append({
                      name: '',
                      periodStart: '',
                      periodEnd: '',
                      role: '',
                    })
                  }
                >
                  <SquaresPlusIcon width='20' height='20' />
                </S.CareerAddButton>
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
            </S.Form>
          )}
        </S.Container>
      </S.ScrollWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Box>
  );
};

export default MyProfile;

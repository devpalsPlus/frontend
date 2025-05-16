import kakao from '../../assets/kakao.svg';
import naver from '../../assets/naver.svg';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';

export const AUTH_MESSAGE = {
  isNotToken: '로그인 토큰이 존재하지 않습니다.',
};

export const ERROR_MESSAGES = {
  EMAIL_REQUIRED: '이메일을 입력해주세요.',
  INVALID_EMAIL: '유효한 이메일을 입력해주세요.',
  CODE_REQUIRED: '인증 코드를 입력해주세요.',
  PASSWORD_REQUIRED: '비밀번호를 입력해주세요.',
  PASSWORD_MIN: '6자리 이상 입력해주세요.',
  PASSWORD_SPECIAL: '특수문자 1개 이상을 포함해주세요.',
  PASSWORD_CHECK_CONFIRM: '비밀번호 확인을 입력해주세요.',
  PASSWORD_CONFIRM: '비밀번호가 다릅니다.',
  NICKNAME_REQUIRED: '닉네임을 입력해주세요.',
  NICKNAME_LENGTH: '6자 이하로 입력해주세요.',
  NICKNAME_FORMAT:
    '특수문자는 (~,`,!,@,#,$,%,^,&,*,(,),-,_,+)만 사용할 수 있습니다.',
  SKILL_REQUIRED: '스킬을 최소 1개 선택해주세요.',
  POSITION_REQUIRED: '주요 포지션을 최소 1개 선택해주세요.',
  GITHUB_SPECIAL: '유효한 깃허브 링크를 입력해주세요.',
  CAREERNAME_REQUIRED: '회사나 참여한 프로젝트 이름을 입력해주세요.',
  STARTPERIOD_REQUIRED: '시작 날짜를 입력해주세요.',
  ENDPERIOD_REQUIRED: '종료 날짜를 입력해주세요.',
  ROLE_REQUIRED: '맡은 역할을 입력해주세요.',
  ENDPERIOD_SPECIAL: '종료 날짜는 시작 날짜 이후여야 합니다.',
} as const;

export const MY_STATUS = {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
} as const;

export const OAUTH_PROVIDERS = [
  {
    name: 'kakao',
    url: import.meta.env.VITE_APP_BASE_URL_KAKAO,
    icon: kakao,
  },
  {
    name: 'naver',
    url: import.meta.env.VITE_APP_BASE_URL_NAVER,
    icon: naver,
  },
  {
    name: 'google',
    url: import.meta.env.VITE_APP_BASE_URL_GOOGLE,
    icon: google,
  },
  {
    name: 'github',
    url: import.meta.env.VITE_APP_BASE_URL_GITHUB,
    icon: github,
  },
];

//constants

import { z } from 'zod';

export const PROJECT_DATA = [
  {
    id: '1',
    name: 'maxVolunteers',
    label: '모집 인원',
    type: 'text',
    unit: '명',
  },
  {
    id: '2',
    name: 'startDatePre',
    label: '시작 예정',
    type: 'text',
    placeholder: 'YYYY-MM-DD',
    unit: '',
  },

  {
    id: '3',
    name: 'duration',
    label: '예상 기간',
    type: 'text',
    unit: '개월',
  },

  {
    id: '4',
    name: 'newBy',
    label: '새싹 여부',
    type: 'checkbox',
    placeholder: '',
    unit: '',
  },
] as const;

export const CAREER_INPUT = [
  {
    name: 'name',
    placeholder: '회사명 / 활동명',
    type: 'text',
  },
  {
    name: 'periodStart',
    placeholder: '시작 기간 (YYYY-MM-DD)',
    type: 'date',
  },
  {
    name: 'periodEnd',
    placeholder: '종료 기간 (YYYY-MM-DD)',
    type: 'date',
  },
  {
    name: 'role',
    placeholder: '역할 / 기여도',
    type: 'text',
  },
];

export const createProjectScheme = z.object({
  startDate: z
    .string({ required_error: '시작 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),
  endDate: z
    .string({ required_error: '종료 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),

  title: z
    .string({ message: '프로젝트 제목을 입력해주세요.' })
    .min(1, { message: '프로젝트 제목을 입력해주세요.' }),

  maxVolunteers: z
    .number({ message: '모집 인원을 입력해주세요.' })
    .min(1, { message: '모집 인원을 입력해주세요.' })
    .refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num >= 1 && num <= 1000;
      },
      { message: '모집 인원은 1명 이상 1000명 이하여야 합니다.' }
    ),
  startDatePre: z
    .string({ required_error: '종료 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),
  field: z.number({ message: '진행 방식을 선택 해주세요.' }),
  duration: z
    .string({ message: '예상 기간을 입력해주세요.' })
    .min(1, { message: '예상 기간을 입력해주세요.' }),
  position: z
    .array(z.number({ message: '숫자로 입력 되어야 합니다.' }))
    .min(1, { message: '1개의 분야를 선택해주세요.' }),
  newBy: z.boolean().optional(),
  languages: z
    .array(z.number({ message: '숫자로 입력 되어야 합니다.' }))
    .min(1, { message: '최소 1개 이상의 언어를 선택해주세요.' }),

  markdownEditor: z
    .string({ message: '프로젝트 내용을 입력해주세요.' })
    .min(10, { message: '프로젝트 내용은 최소 10자 이상이어야 합니다.' }),
});

export const ApplyScheme = z.object({
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
      z
        .object({
          name: z.string().nonempty({ message: '경력명을 입력해주세요.' }),
          periodStart: z
            .string()
            .nonempty({ message: '시작 날짜를 입력해주세요.' })
            .refine((date) => !isNaN(Date.parse(date)), {
              message: '유효한 날짜를 입력해주세요.',
            }),
          periodEnd: z
            .string()
            .nonempty({ message: '종료 날짜를 입력해주세요.' })
            .refine((date) => !isNaN(Date.parse(date)), {
              message: '유효한 날짜를 입력해주세요.',
            }),
          role: z.string().nonempty({ message: '역할을 입력해주세요.' }),
        })
        .refine(
          (data) => new Date(data.periodStart) < new Date(data.periodEnd),
          {
            message: '시작 날짜는 종료 날짜보다 이전이어야 합니다.',
            path: ['periodStart'],
          }
        )
    )
    .optional(),
});

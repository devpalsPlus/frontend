//constants

import { z } from 'zod';

export const PROJECT_DATA = [
  {
    id: '1',
    name: 'maxVolunteers',
    label: '모집 인원',
    type: 'number',
    placeholder: '모집 인원을 입력하세요. (ex. 5)',
  },
  {
    id: '2',
    name: 'startDatePre',
    label: '시작 예정',
    type: 'text',
    placeholder: 'YYYY-MM-DD',
  },

  {
    id: '3',
    name: 'duration',
    label: '예상 기간',
    type: 'number',
    placeholder: '예상 기간을 입력하세요. (ex. 5)',
  },

  {
    id: '4',
    name: 'newBy',
    label: '새싹 여부',
    type: 'checkbox',
    placeholder: '',
  },
] as const;

export const PROJECT_DATA_GET = [
  {
    id: '1',
    name: 'totalMember',
    label: '모집 인원',
  },
  {
    id: '2',
    name: 'startDate',
    label: '시작 예정',
  },
  {
    id: '3',
    name: 'estimatedPeriod',
    label: '예상 기간',
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

  maxVolunteers: z.coerce
    .number({ message: '모집 인원을 입력해주세요.' })
    .min(1, { message: '모집 인원은 1명 이상이어야 합니다.' })
    .max(1000, { message: '모집 인원은 1000명 이하이어야 합니다.' }),
  startDatePre: z
    .string({ required_error: '종료 날짜를 입력해주세요.' })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: '유효한 날짜를 입력해주세요.',
    }),
  field: z.number({ message: '진행 방식을 선택 해주세요.' }),
  duration: z.coerce
    .number({ message: '예상 기간을 입력해주세요.' })
    .positive({ message: '예상 기간은 1 이상이어야 합니다.' })
    .max(365, { message: '예상 기간은 365일을 초과할 수 없습니다.' }),
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

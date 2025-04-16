export const HTTP_ERROR_MESSAGES: Record<
  number | 'unknown',
  { title: string; description: string }
> = {
  400: {
    title: '잘못된 요청입니다.',
    description: '확인 후 다시 시도해 주세요.',
  },
  500: {
    title: '서버에 오류가 발생했어요!',
    description: '잠시 후 다시 시도해 주세요.',
  },
  unknown: {
    title: '오류가 발생했어요!',
    description: '잠시 후 다시 시도해 주세요.',
  },
} as const;

export const HTTP_STATUS_CODE = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

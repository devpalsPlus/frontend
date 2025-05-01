export const INQUIRY_CATEGORY = [
  { title: '사이트 오류' },
  { title: '공고모집' },
  { title: '제안하기' },
  { title: '기타' },
] as const;

export const EMPTY_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' as const;

export const INQUIRY_MESSAGE = {
  categoryDefault: '카테고리',
  fileDefault: '선택된 파일이 없습니다.',
  blowUpMessage: '클릭하면 이미지를 크게 볼 수 있습니다.',
  isImageOpenMessage: '이미지를 클릭하면 사라집니다.',
};

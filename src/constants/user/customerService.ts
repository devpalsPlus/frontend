export const INQUIRY_CATEGORY = [
  { title: '사이트 오류' },
  { title: '공고모집' },
  { title: '제안하기' },
  { title: '기타' },
] as const;

export const EMPTY_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' as const;

export const MODAL_MESSAGE_CUSTOMER_SERVICE = {
  noKeyword: '검색어를 입력하세요.',
};

export const My_INQUIRIES_MESSAGE = {
  categoryDefault: '카테고리',
  fileDefault: '선택된 파일이 없습니다.',
  blowUpMessage: '클릭하면 이미지를 크게 볼 수 있습니다.',
  isImageOpenMessage: '이미지를 클릭하면 사라집니다.',
};

export const INQUIRY_MESSAGE = {
  selectCategory: '카테고리를 선택하세요.',
  writeTitle: '제목을 적어주세요.',
  writeContent: '내용을 적어주세요.',
  inquiredSuccess: '문의글이 작성되었습니다.',
  inquiredError: '문의글 작성에 실패하였습니다.',
  validationFile: '파일 크기는 5MB 이하만 가능합니다.',
};

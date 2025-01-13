//constants

export const PROJECTDATA = [
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

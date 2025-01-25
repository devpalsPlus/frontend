import { expect, test } from 'vitest';
import { formatDate } from '../formatDate';

test('formatDate 함수를 테스트합니다.', () => {
  const date = '2025-01-06T00:00:00.000Z';
  const formattedDate = formatDate(date);

  expect(formattedDate).toBe('2025년 01월 06일');
});

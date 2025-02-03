import { expect, test } from 'vitest';
import { formatImgPath } from '../formatImgPath';

test('formatImgPath 함수를 테스트합니다.', () => {
  const date =
    'https://example.com/users/profile_b4dc06af-410c-497e-9e01-f543e1682423.jpeg';
  const formattedDate = formatImgPath(date);

  expect(formattedDate).toBe(
    'users/profile_b4dc06af-410c-497e-9e01-f543e1682423.jpeg'
  );
});

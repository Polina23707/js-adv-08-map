import { ErrorRepository } from "../errorRepository";

test('create errorRepository', () => {
  let repository = new ErrorRepository();
  expect(repository).toEqual({'errors': new Map([[1 , 'Ошибка обычная'], [2 , 'Ошибка небольшая'], [3 , 'Ошибка ужасная']])});
});

test.each([
  [1, 'Ошибка обычная'],
  [2, 'Ошибка небольшая'],
  [3, 'Ошибка ужасная'],
  [4, 'Unknown error']
])('Error %i text test', (code , textExpected) => {
  let repository = new ErrorRepository();
  expect(repository.translate(code)).toBe(textExpected);
})



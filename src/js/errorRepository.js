export class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка обычная'],
      [2, 'Ошибка небольшая'],
      [3, 'Ошибка ужасная'],
    ]);
  }

  translate(code) {
    if(this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return 'Unknown error';
    }
  }
}
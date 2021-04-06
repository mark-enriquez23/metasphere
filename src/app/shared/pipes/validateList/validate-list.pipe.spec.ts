import { ValidateNationalitiesListPipe } from './validate-nationalities-list.pipe';

describe('ValidateNationalitiesListPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidateNationalitiesListPipe();
    expect(pipe).toBeTruthy();
  });
});

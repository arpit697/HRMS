import { ValidationCheckPipe } from './validation-check.pipe';

describe('ValidationCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidationCheckPipe();
    expect(pipe).toBeTruthy();
  });
});

export {};
//validate the custom assertion
declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toBeNumber(): R;
    }
  }
}

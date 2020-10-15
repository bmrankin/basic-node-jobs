/**
 * This is MyClass
 */
export default class MyClass {
  /**
   * @param {number} a - this is a value
   * @param {number} b - this is a value
   * @return {number} result of the sum value
   */
  sum(a, b) {
    return a + b
  }
}

/**
 * `doSomething()` does something
 * @param {string} x - this is some text
 */
export const doSomething = (x) => {
  console.log(`I did something with ${x}`)
}

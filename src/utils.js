/**
 * This Utils class can be used for common methods that can be accessed across the repo
 */
export default class Utils {
  /**
   * @param {number} a - this is a value
   * @param {number} b - this is a value
   * @return {number} result of the sum value
   */
  static sum (a, b) {
    return a + b
  }

  /**
   *
   * @param {number|string} val
   * @return {number|string} returns numeric string or numbers as numbers
   */
  static toNumber (val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
  }

  /**
   * This is often used when creating a searchable suffix array for Algolia
   * @param {string} string - String that you want to create a suffix array from
   * @param {number} length - Character length of the value of the last index created
   * @return Array of values with each consecutive value in the array having the first character removed
   */
  static createSuffixArray (string, length = 1) {
    if (!string) return null
    const arr = []
    while (string.length > length) {
      string = string.substr(1)
      arr.push(string)
    }
    return arr
  }

}

import fs from 'fs/promises'

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

  /**
   *
   * @param {number} ms
   */
  static delay (ms) {
    const n = parseFloat(ms)
    if (isNaN(n)) {
      throw 'Time needs to be a number in milliseconds'
    } else {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }

  static async readJsonFromFile (file = 'temp_data/data') {
    const data = await fs.readFile(file)
    return JSON.parse(data)
  }

  /**
   * `splitPath()` is used to help get to docs in a collection>doc>subcollection>doc pattern
   * @param {string} path - path string
   * @return {{ segments: Array, original: string, cleanPath: string, length: number, type: string }} Object of all items needed to help get to the correct document or collection in Firestore
   */
  static splitPath (path) {
    const cleanPath = path.startsWith('/') ? path.substring(1) : path
    const segments = cleanPath.split('/')
    return {
      segments: segments,
      original: path,
      cleanPath: cleanPath,
      length: segments.length,
      type: this.isDocument(segments.length) ? 'document' : 'collection'
    }
  }

  /**
   *
   * @param {number} length - length of segments in a Firestore path
   * @return {boolean} Evaluates whether this is a path to a document
   */
  static isDocument(length) {
    return length > 0 && length % 2 === 0
  }

  /**
   *
   * @param {number} length - length of segments in a Firestore path
   * @returns {boolean} Evaluates whether this is a path to a document
   */
   static isCollection(length) {
    return length % 2 === 1
  }
}

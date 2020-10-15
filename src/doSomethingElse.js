import Utils from './utils.js'

/**
 * Use this when you want to do something else
 * @param {string} x - first param
 * @param {string} y - second param
 */
export const doSomethingElse = (x, y) => {
  console.log(Utils.toNumber('test'))
  const total = Utils.sum(Utils.toNumber(x),Utils.toNumber(y))
  console.log({ total })
}

doSomethingElse('2','3')
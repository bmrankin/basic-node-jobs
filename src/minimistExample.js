import 'minimist'
import minimist from 'minimist'
const parseArgs = minimist(process.argv.slice(2))
import help from './help.js'

/**
 * argumentTest illustrates how to use minimist https://github.com/substack/minimist to parse arguments passed from the command line.
 *
 * `$ node example/parse.js -a beep -b boop`
 *
 * `{ _: [], a: 'beep', b: 'boop' }`
 */
export const argumentTest = () => {
  console.log(parseArgs)
}

process.argv.includes('--help') ? help() : argumentTest()

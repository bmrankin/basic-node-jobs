import { someKey } from '../secrets/index.js'
/**
 * This is a function to include an `--help` option in the command line that will direct users to the generated docs
 *
 * To use `import help from './help.js'`
 *
 * `process.argv.includes('--help') ? help() : yourFunction()`
 */
export default () => {
  console.log('\n\nFor help, open build the docs as directed in the README.md and past the following in your browser...')
  console.log('\x1b[36m%s\x1b[0m', `${process.env.PWD}/docs/identifiers.html\n`)
}

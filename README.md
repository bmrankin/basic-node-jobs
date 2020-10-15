# Testing of ESDoc for documentation

- Requires Node v14+ for ES Module files to work
- `"type": "modules"` has been set in `package.json` so that files can have `.js`
  - `(node:87080) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.`

## Build docs
`./node_modules/.bin/esdoc`

## Arguments from the command line
If you need to pass arguments to a function then import `minimist` into your file and parse from there

## Including `--help`
To use
`import help from './help.js'`

Then add the following to the bottom of your file
`process.argv.includes('--help') ? help() : yourFunction()`
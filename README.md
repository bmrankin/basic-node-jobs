# Testing of ESDoc for documentation

- Requires Node v14+ for ES Module files to work
- `"type": "modules"` has been set in `package.json` so that files can have `.js`
  - `(node:87080) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.`

## Build docs
`npm run build:docs`
or
`./node_modules/.bin/esdoc`

## Arguments from the command line
If you need to pass arguments to a function then import `minimist` into your file and parse from there

## Including `--help`
To use
`import help from './help.js'`

Then add the following to the bottom of your file
`process.argv.includes('--help') ? help() : yourFunction()`

## Directories

### `src`
This is where the primary scripts live

### `docs`
This is where esdoc builds to.

It is included in the `.gitignore`

### `data`
Constants and data for use in the repo.

### `data_private`
This is where private data can be placed while working on your local machined.

It is included in the `.gitignore`

### `tmp_data`
This is where downloaded or manipulated data can be placed while working on your local machined.

It is included in the `.gitignore`

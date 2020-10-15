import minimist from 'minimist'
const { collection, docId, action = null } = minimist(process.argv.slice(2))

import { backup } from './firebaseBackupCollections.js'

const main = () => {
  // could use a switch statement here
  if (action === 'backup') {
    backup(collection, docId)
  }
  else {
    console.log('Please define --action')
  }
}

main()

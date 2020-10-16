import minimist from 'minimist'
const { path = null, collection = null, docId = null, action = null } = minimist(process.argv.slice(2))

import { backup } from './firebaseBackupCollections.js'
import { getDocWithKey, getDocByPath } from './firebaseDocs.js'

const main = async () => {
  switch (action) {
    case 'getDocWithId':
      await getDocWithKey(collection, docId)
      process.exit()
      break
    case 'getDocByPath':
      await getDocByPath(path)
      process.exit()
    // case null:
    //   console.log('Please define --action')
    //   break
  }
}

main()

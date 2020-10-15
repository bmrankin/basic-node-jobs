import minimist from 'minimist'
const { collection, docId, action = null } = minimist(process.argv.slice(2))

import { backup } from './firebaseBackupCollections.js'
import { getDocWithKey } from './firebaseDocs.js'

const main = async () => {
  switch (action) {
    case 'getDocWithId':
      // TODO: add --path as option for nested beyond collection & id. This path to nested call will require a helper function
      await getDocWithKey(collection, docId)
      process.exit()
      break
    case null:
      console.log('Please define --action')
      break
  }
}

main()

import { fs } from '../configs/firebase.js'
import Utils from './utils.js'

/**
 *
 * @param {string} collection - Collection the document lives in
 * @param {string} id - Specific `id` of the document
 * @returns {object} The object of the document from Firestore
 */
export const getDocWithKey = async (collection, id) => {
  try {
    const query = await fs.collection(collection)
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          return doc.data()
        } else {
          return null
        }
      })
    console.log({ query })
    return query
  } catch (error) {
    console.error(error)
  }
}
export const getDocByPath= async (path) => {
  const pathObj = Utils.splitPath(path)
  console.log(pathObj)
  if (pathObj.type === 'document') {
    try {
      const query = await fs
        .doc(pathObj.cleanPath)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          } else {
            return null
          }
        })
      console.log({ query })
      return query
    } catch (error) {
      console.error(error)
    }
  } else {
    console.info('This path is to a collection.')
    console.info('\x1b[36m%s\x1b[0m', 'Use --action=getDocsByPath\n')
  }
}

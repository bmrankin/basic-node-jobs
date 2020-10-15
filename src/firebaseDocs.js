import { fs } from '../configs/firebase.js'

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

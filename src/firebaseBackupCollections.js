// import { fs } from '../configs/firebase.js'

/**
 * @param {string} collection - Firestore collection
 * @param {string} docId - Firestore document ID
 */
export const backup = async (collection, docId) => {
  try {
    console.log({ collection })
    console.log({ docId })
  } catch (error) {
    console.error(error)
  }
}

// backup(collection, docId, action)

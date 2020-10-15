import Utils from './utils.js'

async function testDelay () {
  try {
    console.log('A')
    await Utils.delay(2000)
    console.log('B')
  } catch (error) {
    console.error(error)
  }
}

testDelay()

export { testDelay }

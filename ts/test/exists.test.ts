
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RbfVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RbfVpnSDK.test()
    equal(null !== testsdk, true)
  })

})

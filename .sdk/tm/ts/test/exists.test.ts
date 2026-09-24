
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RbfVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RbfVpnSDK.test()
    equal(testsdk instanceof RbfVpnSDK, true,
      'RbfVpnSDK.test() must return a client synchronously')
  })

})

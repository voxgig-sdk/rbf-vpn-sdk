

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RbfVpnSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RBF_VPN_TEST_LIVE=TRUE.
  afterEach(liveDelay('RBF_VPN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RbfVpnSDK.test()
    const ent = testsdk.Subscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RBF_VPN_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"protocol","req":false,"short":"VPN protocol to use","type":"`$STRING`","index$":0},{"active":true,"name":"server","req":false,"short":"VPN server address","type":"`$STRING`","index$":1}],"name":"subscription","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /api/demo","json":"{\"operationId\":\"getDemoSubscription\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"config\":{\"description\":\"VPN configuration details for the demo subscription\",\"properties\":{\"protocol\":{\"description\":\"VPN protocol to use\",\"type\":\"string\"},\"server\":{\"description\":\"VPN server address\",\"type\":\"string\"}},\"type\":\"object\"},\"expiry\":{\"description\":\"Expiration date and time of the demo subscription\",\"format\":\"date-time\",\"type\":\"string\"},\"subscription\":{\"description\":\"Demo subscription identifier or access token\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with demo subscription details\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the server issue\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/demo","segments":[{"lit":"api"},{"lit":"demo"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.config`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"subscription","name__orig":"subscription","Name":"Subscription","name_":"subscription","name-":"subscription","NAME":"SUBSCRIPTION","index$":0}, {"active":true,"entity":"subscription","key$":"BasicSubscriptionFlow","kind":"basic","name":"BasicSubscriptionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"subscription_ref01","srcdatavar":"subscription_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-subscription_ref01"}}],"index$":0}]}, 'Subscription')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscription_ref01_data = Object.values(setup.data.existing.subscription)[0] as any

    // LOAD
    const subscription_ref01_ent = client.Subscription()
    const subscription_ref01_match_dt0: any = {}
    const subscription_ref01_data_dt0 = (await subscription_ref01_ent.load(subscription_ref01_match_dt0)).data()
    assert(null != subscription_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription/SubscriptionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RbfVpnSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RBF_VPN_TEST_SUBSCRIPTION_ENTID': idmap,
    'RBF_VPN_TEST_LIVE': 'FALSE',
    'RBF_VPN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RBF_VPN_TEST_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.RBF_VPN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RBF_VPN_TEST_SUBSCRIPTION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RbfVpnSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RBF_VPN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

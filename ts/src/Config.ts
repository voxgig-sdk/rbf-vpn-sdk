
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RbfVpn',
        slug: "rbf-vpn",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://rbf1.info",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      subscription: {
      },

    }
  }


  entity = {
    "subscription": {
      "fields": [
        {
          "name": "protocol",
          "short": "VPN protocol to use",
          "type": "`$STRING`"
        },
        {
          "name": "server",
          "short": "VPN server address",
          "type": "`$STRING`"
        }
      ],
      "name": "subscription",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/demo",
              "parts": [
                "api",
                "demo"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.config`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


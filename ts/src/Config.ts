
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


  main = {
    name: 'RbfVpn',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://rbf1.info',

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
          "active": true,
          "name": "protocol",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "server",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "subscription",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
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
              },
              "index$": 0
            }
          ],
          "key$": "load"
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


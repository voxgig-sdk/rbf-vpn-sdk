# RbfVpn SDK configuration


def make_config():
    return {
        "main": {
            "name": "RbfVpn",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://rbf1.info",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "subscription": {},
            },
        },
        "entity": {
      "subscription": {
        "fields": [
          {
            "active": True,
            "name": "protocol",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "server",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "subscription",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/demo",
                "parts": [
                  "api",
                  "demo",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.config`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

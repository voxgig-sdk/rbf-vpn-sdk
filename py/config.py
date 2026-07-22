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
            "name": "config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "expiry",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "subscription",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
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
                "method": "GET",
                "orig": "/api/demo",
                "parts": [
                  "api",
                  "demo",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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

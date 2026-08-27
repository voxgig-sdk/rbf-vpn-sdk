# RbfVpn SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "RbfVpn",
            "slug": "rbf-vpn",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "name": "protocol",
            "short": "VPN protocol to use",
            "type": "`$STRING`",
          },
          {
            "name": "server",
            "short": "VPN server address",
            "type": "`$STRING`",
          },
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
                  "demo",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.config`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

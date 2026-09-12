-- RbfVpn SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "RbfVpn",
      slug = "rbf-vpn",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://rbf1.info",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["subscription"] = {},
      },
    },
    entity = {
      ["subscription"] = {
        ["fields"] = {
          {
            ["name"] = "protocol",
            ["short"] = "VPN protocol to use",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "server",
            ["short"] = "VPN server address",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "subscription",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/demo",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "demo",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.config`",
                },
                ["parts"] = {
                  "api",
                  "demo",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

# RbfVpn SDK configuration

module RbfVpnConfig
  def self.make_config
    {
      "main" => {
        "name" => "RbfVpn",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://rbf1.info",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "subscription" => {},
        },
      },
      "entity" => {
        "subscription" => {
          "fields" => [
            {
              "active" => true,
              "name" => "config",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "expiry",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "subscription",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
          ],
          "name" => "subscription",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/api/demo",
                  "parts" => [
                    "api",
                    "demo",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RbfVpnFeatures.make_feature(name)
  end
end

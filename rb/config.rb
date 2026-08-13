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
              "name" => "protocol",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "server",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
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
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/demo",
                  "parts" => [
                    "api",
                    "demo",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.config`",
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

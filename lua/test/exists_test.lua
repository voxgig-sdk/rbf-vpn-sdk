-- RbfVpn SDK exists test

local sdk = require("rbf-vpn_sdk")

describe("RbfVpnSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
